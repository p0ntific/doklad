# Документация по написанию серверного кода

## Архитектура

Серверный код организован в несколько основных слоев:

```
server/
├── pages/
|   ├── basePage.ts         # Базовый провайдер (префетч me)
|   ├── adminPage.ts        # Админский провайдер (наследует base, добавляет role)
|   └── adminUsers.ts       # Провайдер конкретной страницы
├── modules/
|   └── users/
|       ├── resources.ts    # API endpoints
|       ├── mutations.ts    # React Query мутации
|       ├── queries.ts      # React Query квери
|       ├── consts.ts       # Константы (опционально)
|       ├── types.ts        # Типы (опционально)
|       ├── controllers/    # Хуки-контроллеры для компонентов
|       └── index.ts        # Реэкспорт всего модуля
└── config/
    ├── apiRoutes/          # Конфигурация API роутов
    ├── queryKeys.ts        # Ключи для React Query
    └── routes.ts           # Роуты приложения
```

## Resources (Ресурсы)

Слой для работы с внешними API. Содержит чистые функции без побочных эффектов.

### Создание ресурса

Ресурсы создаются с помощью API оберток `createApi` и `createAuthenticatedApi`:

- `createApi` - для публичных эндпоинтов
- `createAuthenticatedApi` - для защищенных ресурсов (автоматически добавляет Authorization)

Функции автоматически типизированы под роуты из `apiRoutes` и поддерживают автодополнение.

**Пример ресурса:**

```typescript
import { createAuthenticatedApi } from '@/packages/api';
import {
    UserCreateRequest,
    UserListResponse,
    UserResponse,
} from '@/types/api/house-aggregator';

export const getUsers = createAuthenticatedApi<'users', void, UserListResponse>(
    'users',
    'GET'
);

export const getMe = createAuthenticatedApi<'me', void, UserResponse>(
    'me',
    'GET'
);

export const addUser = createAuthenticatedApi<
    'addUser',
    UserCreateRequest,
    UserResponse
>('addUser', 'POST');

export const deleteUser = createAuthenticatedApi<'deleteUser', void, void>(
    'deleteUser',
    'DELETE'
);
```

## Queries (Квери)

Слой для получения данных через React Query. Используются стандартные хуки `useQuery` и `useInfiniteQuery`.

**Пример queries.ts:**

```typescript
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/server/config/queryKeys';
import { UserListResponse } from '@/types/api/house-aggregator';

import { USERS_PAGE_SIZE } from './consts';
import { getUsers } from './resources';

export const useGetInfiniteUsers = ({
    limit,
    email_pattern,
}: Omit<IGetUsersParams, 'page'>) => {
    return useInfiniteQuery<
        UserListResponse,
        Error,
        { pages: UserListResponse[] },
        string[],
        number
    >({
        queryKey: QUERY_KEYS.infinityUsers({ email_pattern, limit }),
        queryFn: async ({ pageParam }) => {
            return await getUsers(pageParam, limit, email_pattern);
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            const totalLoaded = allPages.reduce(
                (sum, page) => sum + (page.users?.length || 0),
                0
            );

            if (
                totalLoaded >= lastPage.total ||
                !lastPage.users ||
                lastPage.users.length === 0
            ) {
                return undefined;
            }

            return lastPageParam + (limit ?? USERS_PAGE_SIZE);
        },
    });
};

export const useGetUsers = ({ email_pattern, limit }: IGetUsersParams) => {
    return useQuery<UserListResponse, Error>({
        queryKey: QUERY_KEYS.users({ email_pattern, limit }),
        queryFn: () => getUsers(0, limit, email_pattern),
    });
};
```

## Mutations (Мутации)

Мутации создаются через фабрики, которые автоматически обновляют кеш. Есть два типа фабрик:

### 1. createMutationListFactory

Для работы со списками сущностей (массивы данных). Автоматически обновляет кеш при добавлении/изменении/удалении.

**Пример mutations.ts для списков:**

```typescript
import { createMutationListFactory } from '@/packages/react-query/mutationListFactories';
import {
    UserCreateRequest,
    UserResponse,
    UserUpdateRequest,
} from '@/types/api/house-aggregator';

import { addUser, deleteUser, patchUserRole } from './resources';

const userMutationFactory = createMutationListFactory<
    UserResponse,
    'users',
    'infinityUsers'
>({
    entityName: 'users',
    queryKeyName: 'users',
    infiniteQueryKeyName: 'infinityUsers',
});

export const useAddUser = userMutationFactory.createAdd(
    (body: UserCreateRequest) => addUser(body),
    { position: 'start' }
);

export const useDeleteUser = userMutationFactory.createDelete((id: string) =>
    deleteUser(id)
);

export const usePatchUserRole = userMutationFactory.createUpdate(
    (id: string, body: UserUpdateRequest) => patchUserRole(id, body)
);
```

### 2. createMutationObjectFactories

Для работы с одиночными объектами. Используется когда нужно обновить конкретный объект по ключу (не список).

**Пример mutations.ts для объектов:**

```typescript
import { createMutationObjectFactories } from '@/packages/react-query/mutationObjectFactories';
import {
    CompanyResponse,
    CompanyUpdateRequest,
} from '@/types/api/house-aggregator';

import { deleteCompany, patchCompany } from './resources';

const companyObjectMutationFactory = createMutationObjectFactories<'company'>({
    queryKeyName: 'company',
});

export const useUpdateCompany = (id: string) => {
    return companyObjectMutationFactory.createUpdateWithFixedId(
        (body: CompanyUpdateRequest) => patchCompany(id, body),
        { queryParams: id }
    )();
};

export const useDeleteCompany = (id: string) => {
    return companyObjectMutationFactory.createDeleteWithFixedId(() =>
        deleteCompany(id)
    )();
};
```

### Дополнительные опции мутаций

Фабрики поддерживают дополнительные опции:

```typescript
userMutationFactory.createAdd((body: UserCreateRequest) => addUser(body), {
    position: 'start',
    queryParams: { limit: 10 },
    infiniteQueryParams: { limit: 10 },
    invalidateQueries: [QUERY_KEYS.otherData()],
    customOnSuccess: (data, variables) => {
        console.log('Пользователь добавлен:', data);
    },
});
```

## Controllers (Контроллеры)

Слой для композиции кверий и мутаций и подготовки данных.

### Создание контроллера

```typescript
'use client';

import { useDebounce } from '@uidotdev/usehooks';
import { useQueryState } from 'nuqs';

import { useMemo } from 'react';

import {
    PARSER_URLS_PAGE_SIZE,
    PARSER_URLS_SEARCH_NAME,
} from '@/server/modules/parserUrls/consts';
import { useGetParserUrls } from '@/server/modules/parserUrls/queries';

const DEBOUNCE_TIME = 300;

export const useParserUrlsController = () => {
    const [parserUrlsSearch] = useQueryState(PARSER_URLS_SEARCH_NAME);

    const debouncedParserUrlsSearch = useDebounce(
        parserUrlsSearch,
        DEBOUNCE_TIME
    );

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useGetParserUrls({
        limit: PARSER_URLS_PAGE_SIZE,
        url_search: debouncedParserUrlsSearch ?? undefined,
    });

    const parserUrls = useMemo(
        () => data?.pages.flatMap((page) => page.urls || []) ?? [],
        [data]
    );
    const totalCount = data?.pages[0]?.total || 0;

    return {
        canShowMore: hasNextPage,
        isError,
        isLoading: isLoading || isFetchingNextPage,
        loadNewPage: fetchNextPage,
        parserUrls,
        totalCount,
    };
};
```

## Страницы (Page Providers)

Страницы используют `PageProvider` для префетча данных на сервере. Это необходимо, т.к. `useQuery` нельзя использовать на стороне сервера.

`PageProvider` поддерживает систему провайдеров с зависимостями, что позволяет создавать базовые провайдеры и наследоваться от них.

### Базовый провайдер (basePage)

Загружает данные текущего пользователя, используется во всех страницах:

```typescript
import { PageProvider } from '@/packages/pageProvider';
import { QUERY_KEYS } from '@/server/config/queryKeys';
import { getMe } from '@/server/modules/users';

export const BasePageProvider = <TParams extends ISearchParams['base']>(
    params?: TParams
) =>
    PageProvider(params).addProvider('me', async ({ add }) => {
        await add(QUERY_KEYS.me(), () => getMe());
    });
```

### Админский провайдер (adminPage)

Наследуется от базового, добавляет проверку роли и редирект для неавторизованных:

```typescript
import { BasePageProvider } from './basePage';

export const AdminPageProvider = <TParams extends ISearchParams['admin']>(
    params?: TParams
) =>
    BasePageProvider(params)
        .addProvider('role', ['me'], async ({ getQueryData, setRole }) => {
            const user = getQueryData<UserResponse>(QUERY_KEYS.me());
            if (user) {
                const userRole = getUserRoleAdapter(user);
                setRole(userRole);
            }
        })
        .addProvider(
            'userRedirect',
            ['role'],
            async ({ addRedirect, role }) => {
                await addRedirect(() => {
                    if (!role) {
                        return { errorCode: 401 };
                    }
                });
            }
        );
```

### Провайдер конкретной страницы

Наследуется от админского, добавляет специфичные данные:

```typescript
import { QUERY_KEYS } from '@/server/config/queryKeys';
import { USERS_PAGE_SIZE, getUsers } from '@/server/modules/users';

import { AdminPageProvider } from './adminPage';

export const AdminUsersPageProvider = (params: IUsersServerParams) =>
    AdminPageProvider<IUsersServerParams>(params)
        .addProvider('usersRedirect', ['role'], async ({ addRedirect }) => {
            await addRedirect(({ rights }) => {
                if (!rights.view_users) {
                    return { errorCode: 403 };
                }
            });
        })
        .addProvider(
            'infinityUsers',
            ['usersRedirect'],
            async ({ params, addInfinite }) => {
                await addInfinite(
                    () =>
                        QUERY_KEYS.infinityUsers({
                            email_pattern: params.usersSearch,
                            limit: USERS_PAGE_SIZE,
                        }),
                    {
                        pageParamSize: USERS_PAGE_SIZE,
                        params: ({ pageParam = 0 }) => {
                            return getUsers(
                                pageParam,
                                USERS_PAGE_SIZE,
                                params.usersSearch
                            );
                        },
                    }
                );
            }
        )
        .addProvider('users', ['usersRedirect'], async ({ params, add }) => {
            await add(QUERY_KEYS.users(), () => {
                return getUsers(0, USERS_PAGE_SIZE, params.usersSearch);
            });
        });
```

### Использование в странице Next.js

```typescript
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { AdminUsersPageProvider } from '@/server/pages/adminUsers';
import { IUsersParams } from '@/types/users';
import { Users } from '@/view/components/Users';

interface IUsersPageProps {
    searchParams: Promise<IUsersParams>;
}

export default async function UsersPage({ searchParams }: IUsersPageProps) {
    const UsersPageQueryClient = await AdminUsersPageProvider(
        await searchParams
    ).execute();

    return (
        <HydrationBoundary state={dehydrate(UsersPageQueryClient)}>
            <Users />
        </HydrationBoundary>
    );
}
```

### Возможности PageProvider

**addProvider** - добавляет провайдер с зависимостями:

```typescript
.addProvider('providerName', ['dependency1', 'dependency2'], async (context) => {
    const { add, addInfinite, addRedirect, params, role, getQueryData, setRole } = context;
});
```

**add** - префетч обычного query:

```typescript
await add(QUERY_KEYS.users(), () => getUsers());
```

**addInfinite** - префетч infinite query:

```typescript
await addInfinite(() => QUERY_KEYS.infinityUsers(), {
    pageParamSize: 20,
    params: ({ pageParam = 0 }) => getUsers(pageParam, 20),
});
```

**addRedirect** - условный редирект:

```typescript
await addRedirect(({ rights }) => {
    if (!rights.view_users) {
        return { errorCode: 403 };
    }
});
```

**getQueryData** - получение данных из кеша:

```typescript
const user = getQueryData<UserResponse>(QUERY_KEYS.me());
```

**setRole** - установка роли для последующих провайдеров:

```typescript
setRole(UserRole.Admin);
```

### Важные моменты

- `pageParamSize` автоматически генерирует `getNextPageParam`, который увеличивает параметр на указанное значение
- `initialPageParam` по умолчанию равен `0`, можно не указывать
- Если нужна кастомная логика пагинации, можно использовать `getNextPageParam` вместо `pageParamSize`
- Константы `*_PAGE_DEFAULT` больше не используются в проекте - везде используется `0` по умолчанию

## Api обертки

Проект использует систему API оберток для унификации работы с внешними API. Основная идея - создать переиспользуемые функции-генераторы, которые инкапсулируют общую логику HTTP запросов.

### createApi

Базовая обертка для создания API функций. Автоматически добавляет необходимые заголовки (CSP, Content-Type), обрабатывает URL построение, парсит JSON ответы и управляет ошибками. Подходит для публичных эндпоинтов.

### createAuthenticatedApi

Расширение `createApi` с автоматическим добавлением Authorization заголовка из куки. Поддерживает как серверную (next/headers), так и клиентскую (document.cookie) стороны. Используется для защищенных ресурсов.

### Создание собственной обертки

Для создания новой обертки используйте `extraHeaders` в `createApi`. Например, для API с кастомными заголовками:

```typescript
export async function createCustomApi<TBody, TResult>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    callback: ApiCallback<TBody, TResult>
) {
    return createApi(method, callback, {
        extraHeaders: {
            'X-Custom-Header': 'value',
            'X-API-Version': '2.0',
        },
    });
}
```

или добавьте другие поля в extraParams. Главное наследоваться от единого createApi.
