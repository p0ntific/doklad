# Таблицы - Tanstask Table

## Что это и зачем

Библиотека для создания мощных таблиц с сортировкой, фильтрацией, пагинацией, группировкой и виртуализацией. Предоставляет логику работы с данными, а UI рендерите сами.

Если у вас таблица - это основной функционал, то смело устанавливаем, не стоит писать велосипеды.

### Документация: https://tanstack.com/table/latest/docs/overview

## Интеграция с другими TanStack библиотеками

### + TanStack Query

```tsx
const { data, isLoading } = useQuery(['users'], fetchUsers);
const table = useReactTable({ data: data ?? [] });
```

### + TanStack Virtual

```tsx
// Для больших таблиц - виртуализация строк
const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
});
```
