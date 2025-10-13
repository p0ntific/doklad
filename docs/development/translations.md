# Система переводов

Переводы модульные, располагаются в `view/translations/[ru/en]/yourModule.ts.

Используется библиотека: `next-intl`.

Пример:

```typescript
export const error403 = {
    description:
        'You do not have permission to access this resource. Please contact the administrator for the necessary permissions.',
    loginButton: 'Switch Account',
    retryButton: 'Try Again',
    title: 'Access Forbidden',
};
```

Затем модуль импортируется в `index` файл:

```typescript
import { RuTranslations } from '@/view/translations/ru';

import { error401 } from './error401';
import { error403 } from './error403';
import { errorPageWrapper } from './errorPageWrapper';
import { notFoundPage } from './notFoundPage';

export const en: RuTranslations = {
    error401,
    error403,
    errorPageWrapper,
    notFoundPage,
};
```

Затем то же самое повторяется для остальных языков. Эталоном считается русский. Если на других языках нет нужного ключа из русского, ts выбросит ошибку.

Применение переводов в коде:

```tsx
'use client';

import { memo } from 'react';

import { useTranslations } from 'next-intl';

import { IError404Props } from '@/view/components/Error404/types';
import { ErrorPageWrapper } from '@/view/components/ErrorPageWrapper';

function Error404Component({ onRetry }: IError404Props) {
    const t = useTranslations('notFoundPage');

    return (
        <ErrorPageWrapper
            data-index='Error404Component'
            errorCode='404'
            title={t('title')}
            description={t('description')}
            actions={null}
            onRetry={onRetry}
        />
    );
}

export const Error404 = memo(Error404Component);
```
