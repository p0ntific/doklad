# Клиентский код View

Документация по организации клиентского кода в папке /view. Этот слой содержит все UI компоненты, хуки, утилиты и стили для фронтенд части приложения.

## Архитектура

```
view/
├── components/ # Переиспользуемые UI компоненты
├── hooks/ # Переиспользуемые React хуки
├── libs/ # Утилитарные функции и библиотеки
├── modules/ # Бизнес-модули с состоянием
└── styles/ # Глобальные стили и CSS переменные
```

## Components (Компоненты)

Переиспользуемые UI компоненты, организованные по принципу "один компонент - одна папка".

### Структура компонента

```
components/
└── ComponentName/
    ├── index.tsx # Основной компонент
    ├── types.ts # TypeScript типы
    └── hooks/
        ├── index.ts # Реэкспорт
        ├── useComponentName.ts
        └── useSomethingElse.ts
```

### Пример компонента

```tsx
// components/Error404/index.tsx
import Link from 'next/link';
import { IError404Props } from './types';

export const Error404 = ({ homeUrl = '/' }: IError404Props) => {
  return (
    <div className='bg-red-500'>
      <h1 className='text-3xl text-amber-400'>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist.
      </p>
      <Link href={homeUrl}>
        Go Home
      </Link>
    </div>
  );
}

// components/Error404/types.ts
export interface IError404Props {
  homeUrl?: string;
}
```

## Libs (Утилиты и полезные файлы)

Сюда кладем переиспользуемые formatter'ы/адаптеры и т.п. и схемы для валидации zod. Для перевода схем есть хук `useLocalizedSchemas` в `libs/schemas/useLocalizedSchemas.ts`. Достаточно добавить свою схему и использовать:

```ts
import { z } from 'zod';

import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { PollIntervalValue } from '@/types/parserUrls';

export const useLocalizedSchemas = () => {
    const t = useTranslations('validation');

    return useMemo(() => {
        const yourSchema = z.object({
            is_active: z.boolean().optional(),
            poll_interval_sec: z.enum(PollIntervalValue, {
                message: t('pollInterval.invalid'),
            }),
        });

        return {
            yourSchema,
        };
    }, [t]);
};

export type ILocalizedSchemas = ReturnType<typeof useLocalizedSchemas>;
```

### Пример структуры

```
libs/
├── date.ts # Работа с датами
├── format.ts # Форматирование данных
├── object.ts # Работа с объектами
├── string.ts # Работа со строками
├── schemas/ # Zod схемы валидации
│   ├── auth.ts # Схемы аутентификации
│   ├── common.ts # Общие схемы
│   ├── forms.ts # Схемы форм
│   └── index.ts # Экспорт схем
└── index.ts # Центральный экспорт
```

## Modules (Модули)

Бизнес-модули содержат клиентскую логику, состояние и специфичные хуки. Сюда кладем всю логику которая используется в нескольких компонентах или в большём компоненте по типу страницы.

### Структура модуля

```
modules/
└── users/
    ├── store/ # Zustand стор для UI состояния
    │   ├── index.ts
    │   └── helpers.ts
    ├── selectors/ # Селекторы для стора
    │   ├── userSelectors.ts
    │   └── index.ts
    ├── hooks/ #  хуки
    │   ├── useUpdateUser.ts
    │   └── index.ts
    └── libs/ # Утилиты модуля
        ├── formatters.ts
        └── index.ts
```

## Styles (Стили)

Глобальные стили и CSS переменные для всего приложения.

### Структура

```
styles/
├── globals.css # Глобальные стили
└── animations.css # Анимации
```

## Интеграция с серверным слоем

Используем контроллеры, queries и мутации

```typescript
// Использование серверных контроллеров в компонентах
import { useAboutController } from '@/server/controllers';

export const AboutPage = () => {
  const { users, isLoading, isError } = useAboutController();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```
