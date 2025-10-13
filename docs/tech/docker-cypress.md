# Docker-based Cypress Component Tests

## Почему Docker?

Docker обеспечивает **консистентное окружение** для визуальных тестов между локальной разработкой и CI/CD, решая проблему различий в шрифтах и рендеринге.

## Быстрый старт

```bash
# Запустить тесты
npm run test:screenshots

# Обновить baseline скриншоты
npm run test:screenshots-update

# Локальная версия (без Docker, быстрее но может отличаться от CI)
npm run test:screenshots-local
npm run test:screenshots-local-update
```

## Производительность

### Первый запуск
- **~30-60 секунд** - сборка Docker образа с установкой зависимостей
- Образ кэшируется с меткой пакетов зависимостей

### Последующие запуски
- **~5-10 секунд** - запуск тестов
- ✅ Образ переиспользуется (кэш)
- ✅ Исходный код монтируется через volumes (без копирования)
- ✅ Пересборка только при изменении package.json/package-lock.json

### Оптимизации

1. **Volume mounting**: Код не копируется в образ, а монтируется при запуске
2. **Smart rebuild**: Автоматическая проверка необходимости пересборки
3. **Layer caching**: Docker кэширует слои для быстрой сборки
4. **Optimized context**: .dockerignore исключает ненужные файлы

## Как это работает

```bash
# Скрипты автоматически:
# 1. Проверяют нужна ли пересборка образа (по хешу package.json)
# 2. Используют кэшированный образ если зависимости не изменились
# 3. Монтируют исходный код через volumes (instant start)
# 4. Запускают Cypress тесты
# 5. Копируют скриншоты обратно на хост
# 6. Организуют скриншоты в правильные директории
```

## Структура файлов

```
frontend/
├── Dockerfile.cypress                      # Базовый образ с зависимостями
├── docker-compose.cypress.yml              # Опциональный compose файл
├── packages/cypress/
│   ├── scripts/
│   │   ├── docker-test-component.sh       # Скрипт запуска тестов
│   │   └── docker-update-snapshots.sh     # Скрипт обновления baseline
│   ├── collect-baseline.cjs               # Сбор baseline для Docker
│   └── organize-snapshots.cjs             # Организация результатов
└── view/
    └── components/
        └── InfoBlock/
            └── __tests__/
                └── __snapshots__/          # Baseline скриншоты (коммитятся в git)
                    ├── index.cy.tsx-InfoBlock-base.png
                    └── __diff_images__/    # Различия (игнорируются git)

# cypress-image-diff-screenshots/ используется только внутри Docker (не коммитится)
```

## Управление образами

```bash
# Посмотреть текущий образ
docker images cypress-component-tests:cache

# Принудительная пересборка
docker build -f Dockerfile.cypress -t cypress-component-tests:cache . --no-cache

# Очистить старые образы
docker image prune -f

# Удалить образ для пересборки
docker rmi cypress-component-tests:cache
```

## CI/CD

GitHub Actions автоматически использует Docker для консистентности:
- `.github/workflows/front-test-screenshots.yml`
- Кэширует Docker слои между запусками
- Использует те же скрипты что и локально

## Troubleshooting

### Медленная сборка
```bash
# Проверьте размер Docker context
du -sh .

# Убедитесь что .dockerignore правильно настроен
cat .dockerignore
```

### Проблемы с permissions (Linux)
```bash
# Скрипты автоматически исправляют права
# Если не работает - вручную:
sudo chown -R $(id -u):$(id -g) cypress-image-diff-screenshots/ view/
```

### Образ не обновляется
```bash
# Удалите образ для пересоздания
docker rmi cypress-component-tests:cache

# Следующий запуск пересоберет образ
npm run test:screenshots
```

## Сравнение с локальным запуском

| Характеристика | Docker | Локально |
|---------------|--------|----------|
| Консистентность с CI | ✅ 100% | ❌ Может отличаться |
| Скорость (1й запуск) | ⚠️ 30-60s | ✅ 5-10s |
| Скорость (повторный) | ✅ 5-10s | ✅ 5-10s |
| Зависимости | ✅ Изолированные | ⚠️ Системные |
| Шрифты | ✅ Фиксированные | ⚠️ Системные |

## Рекомендации

- 🎯 **Используйте Docker** перед коммитом для гарантии прохождения CI
- ⚡ **Используйте локально** для быстрой разработки/отладки
- 🔄 После изменения package.json первый запуск будет дольше (пересборка)
- 💡 Держите образ актуальным для быстрых последующих запусков