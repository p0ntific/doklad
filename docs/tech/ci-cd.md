# CI/CD Pipeline

## Обзор

Проект использует GitHub Actions для автоматизации процессов сборки, тестирования и проверки качества кода. Все workflow файлы находятся в директории `.github/workflows/` и в настоящее время настроены для ручного запуска (`workflow_dispatch`), но готовы к автоматическому запуску при создании Pull Request.

## Структура Pipeline

### 1. Build Pipeline (`build.yml`)

**Назначение**: Проверка успешности сборки проекта

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR

**Особенности**:

- Кэширование Next.js build артефактов

**Этапы**:

1. Checkout кода
2. Установка Node.js 20 с кэшированием npm
3. Кэширование Next.js build (`~/.npm`, `.next/cache`)
4. Установка зависимостей (`npm ci`)
5. Сборка проекта (`npm run build`)

**Окружение**: Ubuntu Latest

### 2. Code Check Pipeline (`code-check.yml`)

**Назначение**: Статический анализ кода и проверка типов

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR

**Особенности**:

- Кэширование ESLint

**Этапы**:

1. Checkout кода
2. Установка Node.js 20 с кэшированием npm
3. Кэширование ESLint (`~/.eslintcache`)
4. Установка зависимостей (`npm ci`)
5. Проверка TypeScript типов (`npx tsc --noEmit`)
6. Линтинг кода (`npm run lint`)

**Окружение**: Ubuntu Latest

### 3. Unit Tests Pipeline (`unit-tests.yml`)

**Назначение**: Запуск модульных тестов

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR

**Особенности**:

- Кэширование Vitest

**Этапы**:

1. Checkout кода
2. Установка Node.js 20 с кэшированием npm
3. Кэширование Vitest (`node_modules/.vitest`)
4. Установка зависимостей (`npm ci`)
5. Запуск тестов (`npm run test`)

**Окружение**: Ubuntu Latest

### 4. Screenshot Tests Pipeline (`screenshot-tests.yml`)

**Назначение**: Визуальное регрессионное тестирование с использованием Cypress

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR

**Особенности**:

- Использует concurrency group для предотвращения параллельных запусков
- Timeout: 30 минут
- Использует Docker для изоляции тестового окружения
- Кэширование Cypress бинарных файлов

**Этапы**:

1. Checkout кода
2. Установка Node.js 20 с кэшированием npm
3. Кэширование Cypress (`~/.cache/Cypress`)
4. Установка зависимостей (`npm ci --ignore-engines`)
5. Создание директорий для Cypress
6. Сборка Docker образа (`Dockerfile.cypress`)
7. Запуск визуальных тестов в Docker контейнере
8. Загрузка артефактов при ошибках (скриншоты, видео, diff)
9. Загрузка текущих скриншотов для ревью
10. Комментирование PR при ошибках

**Артефакты**:

- При ошибках: скриншоты, видео, diff файлы (30 дней)
- Всегда: текущие скриншоты (7 дней)

**Окружение**: Ubuntu Latest

### 5. Lighthouse CI Pipeline (`lighthouse.yml`)

**Назначение**: Мониторинг производительности и качества веб-приложения

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR

**Особенности**:

- Timeout: 15 минут
- Кэширование Next.js build артефактов
- Автоматическое комментирование PR с результатами
- Не требует токенов для базовой функциональности

**Этапы**:

1. Checkout кода
2. Установка Node.js 20 с кэшированием npm
3. Кэширование Next.js build (`~/.npm`, `.next/cache`)
4. Установка зависимостей (`npm ci`)
5. Сборка проекта (`npm run build`)
6. Установка Lighthouse CI
7. Запуск Lighthouse анализа
8. Загрузка результатов в артефакты
9. Комментирование PR с метриками производительности

**Проверяемые метрики**:

- Performance (предупреждение при < 80%)
- Accessibility (ошибка при < 90%)
- Best Practices (предупреждение при < 80%)
- SEO (предупреждение при < 80%)

**Артефакты**: Lighthouse отчеты (30 дней)

**Окружение**: Ubuntu Latest

### 6. Security Scan Pipeline (`security.yml`)

**Назначение**: Проверка безопасности кода и зависимостей

**Триггеры**:

- Ручной запуск (`workflow_dispatch`)
- Закомментирован автоматический запуск на PR
- Закомментирован еженедельный запуск (понедельник, 2:00)

**Компоненты**:

#### Dependency Check

- npm audit для проверки уязвимостей зависимостей
- Генерация отчетов в JSON и текстовом формате
- Dry-run исправлений

#### CodeQL Analysis

- Статический анализ кода GitHub CodeQL
- Поддержка JavaScript/TypeScript
- Security-extended и security-and-quality запросы
- Интеграция с GitHub Security tab

**Артефакты**: Отчеты аудита безопасности (30 дней)

**Окружение**: Ubuntu Latest

## Доступные NPM Scripts

### Основные команды

- `npm run dev` - запуск dev сервера с Turbopack
- `npm run dev:test` - запуск dev сервера в тестовом режиме
- `npm run build` - сборка проекта для продакшена
- `npm run start` - запуск продакшен сервера

### Качество кода

- `npm run lint` - проверка кода линтером
- `npm run lint:fix` - автоматическое исправление ошибок линтера

### Тестирование

- `npm run test` - запуск unit тестов (Vitest)
- `npm run cypress:open` - открытие Cypress UI
- `npm run cypress:run` - запуск Cypress тестов в headless режиме
- `npm run test:e2e` - запуск E2E тестов с автоматическим стартом сервера
- `npm run test:e2e-update` - обновление скриншотов для визуальных тестов

### Визуальное тестирование

- `npm run visual:test` - запуск визуальных тестов
- `npm run visual:update` - обновление эталонных скриншотов

### Docker команды

- `npm run docker:build-cypress` - сборка Docker образа для Cypress
- `npm run docker:clean-cypress` - очистка Docker образов и системы

## Технологический стек

### Основные технологии

- **Runtime**: Node.js 20
- **Framework**: Next.js 15.4.1
- **Language**: TypeScript 5
- **Package Manager**: npm

### Тестирование

- **Unit Tests**: Vitest 3.2.4
- **E2E Tests**: Cypress 14.5.2
- **Testing Library**: @testing-library/react, @testing-library/jest-dom

### Качество кода

- **Linting**: ESLint 9.17.0 с TypeScript поддержкой
- **Formatting**: Prettier 3.6.2
- **Git Hooks**: Husky 9.1.7

### Производительность и безопасность

- **Performance Monitoring**: Lighthouse CI
- **Security Scanning**: GitHub CodeQL, npm audit
- **Dependency Vulnerability Check**: npm audit с автоматическими отчетами

### Кэширование

- **Next.js Build Cache**: Кэширование `.next/cache` и `~/.npm`
- **ESLint Cache**: Кэширование `~/.eslintcache`
- **Vitest Cache**: Кэширование `node_modules/.vitest`
- **Cypress Cache**: Кэширование `~/.cache/Cypress`

### Структура проверок

```
PR Creation
├── Code Check (TypeScript + Linting + ESLint Cache)
├── Unit Tests (Vitest + Cache)
├── Build (Next.js + Build Cache)
├── Screenshot Tests (Cypress Visual + Cache)
├── Lighthouse CI (Performance + Accessibility + SEO)
└── Security Scan (CodeQL + npm audit)
```
