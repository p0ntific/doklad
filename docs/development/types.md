# Типизация

Документация по работе с типами в проекте. Папка `/types` содержит централизованные типы для всего приложения.

## Структура

```
types/
├── api.ts       # Автогенерированные типы API (OpenAPI)
├── index.ts     # Экспорт и реэкспорт типов API
└── utils.ts     # Утилитарные типы
...              # Другие типы для модулей
```

## API типы (api.ts)

Файл содержит автогенерированные типы на основе OpenAPI спецификации. **Не редактируйте этот файл вручную** - он обновляется автоматически.

```ts
export type ValidationErrorLocItem = string | number;

export interface ValidationError {
    loc: ValidationErrorLocItem[];
    msg: string;
    type: string;
}
//... и тд много
```

## utils.ts

Содержит вспомогательные типы:

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type AnyObject = Record<string, Any>;
```

Когда нужен any и т.п.:)

## Лучшие практики

```typescript
// ✅ Хорошо - используйте префиксы для ясности
interface IUser {
    id: string;
}

// ❌ Плохо - неясные имена,
// не начинается с I,
// через type, а не через interface
// лишние ? и | null не стоит добавлять для простоты
type User1 = {
    id?: string | null;
};
```

## Обновление API типов

### Автоматическая генерация

API типы генерируются автоматически из OpenAPI спецификации. Для обновления:

1. Запустите команду генерации типов:
    ```bash
    npm run generate-api-types
    ```
2. Проверьте изменения в `types/api/index.ts`
