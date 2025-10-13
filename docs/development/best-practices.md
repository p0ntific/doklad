# Лучшие практики разработки

Документ содержит архитектурные принципы и лучшие практики для разработки в рамках проекта.

## Навигация и редиректы

Для удобной и контролируемой системы навигации и редиректов используется модуль `packages/navigation`.

### Генерация роутов

Все типы роутов генерируются автоматически из структуры `app/[locale]`:

```bash
npm run generate-routes
```

Это создает:
- `packages/navigation/route-types.ts` - типы PageName и PageParams
- `packages/navigation/routes.ts` - конфигурация роутов

### Search параметры (Query Parameters)

Для работы с query параметрами используется типобезопасный хук `useQueryState` с валидацией через Zod:

```typescript
import { useQueryState } from '@/packages/navigation';

// Автоматическая типизация и валидация
const [search, setSearch] = useQueryState('admin-users', 'usersSearch');
const [region, setRegion] = useQueryState('admin-companies', 'companiesRegion');
```

**Добавление новых параметров:**

1. Определите Zod схему в `packages/navigation/config/search-params.ts`:

```typescript
export const SEARCH_PARAMS_SCHEMAS = {
    'admin-users': adminSearchParamsSchema.extend({
        usersSearch: z.string().nullable().optional(),
        usersRole: z.nativeEnum(UserRoleEnum).nullable().optional(),
    }),
} as const;
```

2. Типы генерируются автоматически через `z.infer` - готово к использованию!

### Маскированные URL

Для SEO-friendly URLs используйте маски в `packages/navigation/config/masks.ts`:

```typescript
export const ROUTE_MASKS: RouteMasks = {
    '/admin/companies?companiesRegion=Амурская%20область':
        '/admin/companies/amurskaya-oblast',
};
```

URL `/admin/companies/amurskaya-oblast` будет отображаться пользователю, но внутри работает с query параметрами.

### Редиректы

Настраиваются в `packages/navigation/config/redirects.ts`:

```typescript
export const ROUTE_REDIRECTS: RouteRedirects = {
    'old-path': {
        source: '/old-companies',
        destination: '/admin/companies',
        permanent: true,
    },
};
```

### Утилиты навигации

```typescript
import { validateParamValue, buildNormalizedUrl } from '@/packages/navigation';

// Валидация значения параметра
const validated = validateParamValue('admin-companies', 'companiesRegion', value);

// Построение URL с параметрами
const url = buildNormalizedUrl('/admin/companies', { companiesRegion: 'Амурская область' });
```

**Подробная документация:** [packages/navigation/README.md](../../packages/navigation/README.md)

## Переносим данные между страницами

В Next.js приложении с Server-Side Rendering (SSR) существует несколько подходов для передачи данных между страницами.

### 1. URL параметры (Search Params)

Используйте типобезопасный `useQueryState` для фильтров и параметров поиска:

```typescript
import { useQueryState } from '@/packages/navigation';

const [search, setSearch] = useQueryState('admin-users', 'usersSearch');
const [status, setStatus] = useQueryState('admin-companies', 'companiesStatus');
```

**Когда использовать:**
- Фильтры и сортировка
- Параметры поиска
- Pagination
- Любые параметры, которые должны сохраняться в URL

### 2. Cookies

```typescript
import Cookies from 'js-cookie';

export async function getAuthToken(): Promise<string | null> {
    if (typeof window !== 'undefined') {
        // Клиентская сторона - используем js-cookie
        return Cookies.get('auth_token') || null;
    } else {
        // Серверная сторона (Next.js)
        try {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const { cookies } = require('next/headers');
            const cookieStore = await cookies();
            const token = cookieStore.get('auth_token');
            return token?.value || null;
        } catch {
            return null;
        }
    }
}
```

Если это токены, `isBannerShowed` (флаги), то используем смело.

## Управление модальными окнами

Для управления модальными окнами используется `ModalManager`.

### Как добавить свою модалку:

1. **Заводим интерфейс пропсов** в `types/modals/modalProps.ts`

2. **Добавляем ключ для модалки** в `types/modals/index.ts`

```typescript
export enum ModalKeys {
    PARSER_URLS_DELETE_MODAL = 'ParserUrlsDeleteModal',
    PARSER_URLS_ADD_MODAL = 'ParserUrlsAddModal',
    PARSER_URLS_EDIT_MODAL = 'ParserUrlsEditModal',
    YOUR_NEW_MODAL = 'YourNewModal',
}
```

3. **Добавляем пропсы** в `IModalPropsMap`

```typescript
export interface IModalPropsMap {
    [ModalKeys.PARSER_URLS_DELETE_MODAL]: IParserUrlsDeleteModalProps;
    [ModalKeys.PARSER_URLS_ADD_MODAL]: IParserUrlsAddModalProps;
    [ModalKeys.PARSER_URLS_EDIT_MODAL]: IParserUrlsEditModalProps;
    [ModalKeys.YOUR_NEW_MODAL]: IYourNewModalProps;
}
```

4. **Регистрируем модалку** в `view/modules/modals/modalRegistry/index.ts`

```typescript
registerModal(ParserUrlsEditModal, {
    name: ModalKeys.PARSER_URLS_EDIT_MODAL,
});
```

5. **Можно использовать!**

```typescript
const { open: openDeleteModal } = useModal(
    ModalKeys.PARSER_URLS_DELETE_MODAL
);

// обязательно обернуть вернувшуюся функцию открытия в useCallback,
// без этого почему-то лагает:)))
const handleOpenDeleteModal = useCallback(
    ({ id, url }: Omit<IParserUrlsDeleteModalProps, 'onClose'>) => {
        openDeleteModal({ id, url });
    },
    [openDeleteModal]
);

<button
    onClick={() =>
        handleOpenDeleteModal({
            id: parserUrl.id,
            url: parserUrl.url,
        })
    }
    className='text-red-500 border-2 border-red-500 rounded-full p-1 transition-all duration-300 hover:bg-red-500 hover:text-white'
>
    <X size={16} />
</button>
```

## Отслеживание TODO комментариев

Для напоминания о незавершенных задачах используется автоматический сбор TODO комментариев.

**Запуск вручную:**

```bash
npm run todo-check
```

## Даты и время

Для работы с датами и временем используется библиотека `dayjs`.
