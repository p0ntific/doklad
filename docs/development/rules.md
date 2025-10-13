# Правила разработки

Данный документ содержит обязательные правила и стандарты для разработки на Next.js в рамках данного проекта.

## Основные принципы

- **Обязательно использовать TypeScript** для всех компонентов, хуков, утилит и страниц
- Все файлы должны иметь расширение `.ts` или `.tsx`

### 2. Синтаксис компонентов

**Использовать стрелочные функции** для объявления компонентов:

```tsx
const Component = () => {
    return <div>Content</div>;
};
```

**Не использовать function declaration:**

```tsx
// ❌ Неправильно
function Component() {
    return <div>Content</div>;
}
```

### 3. Экспорты

**Запрещено использовать default экспорты**

Использовать только именованные экспорты:

```tsx
// ✅ Правильно
export const Component = () => {
    return <div>Content</div>;
};

// ❌ Неправильно
export default Component;
```

## Оптимизация производительности

### 1. Обязательное использование React хуков оптимизации

**`useCallback`** - для мемоизации функций:

```tsx
const handleClick = useCallback(() => {
    // логика обработки
}, [dependency]);
```

**`useMemo`** - для мемоизации вычислений:

```tsx
const expensiveValue = useMemo(() => {
    return computeExpensiveValue(data);
}, [data]);
```

**`memo`** - для мемоизации компонентов:

```tsx
export const Component = memo(() => {
    return <div>Content</div>;
});
```

## Структура компонентов

Каждый компонент должен быть организован в отдельной папке со следующей структурой:

```
Component/
├── index.tsx              # Основной файл компонента
├── types.ts               # Типы (опционально)
├── consts.ts              # Константы (опционально)
├── assets/                # Изображения (опционально)
│   ├── icon.svg
│   └── image.png
├── hooks/                 # Хуки (если в компоненте больше 5 выражений)
│   ├── useComponent.ts
│   └── useSomething.ts
└── libs/                  # Переиспользуемая логика
    ├── doSomething.ts
    └── utils.ts
```

### Правила организации:

- **`index.tsx`** - основной файл с компонентом
- **`types.ts`** - создавать только при наличии специфичных типов для компонента
- **`consts.ts`** - создавать только при наличии констант, используемых в компоненте
- **`assets/`** - папка для изображений, иконок и других статических ресурсов
- **`hooks/`** - создавать когда в компоненте больше 5 выражений, выносить логику в кастомные хуки
- **`libs/`** - создавать для переиспользуемой или сложной логики

### Пример структуры компонента:

```tsx
// Component/index.tsx
import { memo, useCallback, useMemo } from 'react';

import { useComponent } from './hooks/useComponent';
import { ComponentProps } from './types';

export const Component = memo<ComponentProps>(({ data, onAction }) => {
    const { processedData, isLoading } = useComponent(data);

    const memoizedValue = useMemo(() => {
        return processedData.map(item => item.value);
    }, [processedData]);

    const handleClick = useCallback(() => {
        onAction(memoizedValue);
    }, [onAction, memoizedValue]);

    return <div className='max-w-3xl bg-red-500'>{/* JSX content */}</div>;
});
```

## Тестирование

### 1. Обязательное покрытие тестами

Каждая написанная страница должна быть покрыта:

- **Скриншотными тестами** (визуальное тестирование)
- **E2E тестами** (функциональное тестирование)

### 2. Структура тестов

```
cypress/e2e/page-name/
├── index.cy.ts                    # E2E тесты
└── __image_snapshots__/           # Скриншоты
    ├── test-mobile.png
    └── test-desktop.png
```

### Пример E2E теста:

```typescript
describe('Page Name Tests', () => {
    it('should render correctly on mobile', () => {
        cy.viewport(375, 667);
        cy.visit('/page-name');
        cy.matchImageSnapshot('page-name-mobile');
    });

    it('should render correctly on desktop', () => {
        cy.viewport(1920, 1080);
        cy.visit('/page-name');
        cy.matchImageSnapshot('page-name-desktop');
    });

    it('should handle user interactions', () => {
        cy.visit('/page-name');
        cy.get('[data-testid="button"]').click();
        cy.get('[data-testid="result"]').should('be.visible');
    });
});
```

## Стилизация

### 1. Tailwind css

- Использовать только **Tailwind** для стилизации компонентов
- Для анимации keyframes пишем в view/styles/amimations.css

### 2. Пример использования:

```tsx
// Component/index.tsx

export const Component = memo(() => {
    return (
        <div className='max-w-3xl bg-red-500'>
            <h1 className='text-3xl text-white'>Title</h1>
        </div>
    );
});
```

## Контроль качества

### 1. CI/CD и pre-commit проверки

### 2. Code Review требования:

- Соблюдение всех правил документации
- Наличие тестов для новой функциональности
- Оптимизация производительности (`useCallback`, `useMemo`, `memo`)
- Правильная структура компонентов
