# Cypress: e2e и компонентные тесты со скриншотами

## Обзор

В проекте используется Cypress для:

- **End-to-end тестирования** - проверка всего приложения через браузер
- **Компонентного тестирования** - изолированное тестирование React компонентов
- **Визуального регрессионного тестирования** - сравнение скриншотов для обнаружения визуальных изменений

Все визуальные тесты запускаются в Docker для обеспечения детерминированности скриншотов независимо от платформы.

## Структура проекта

````
cypress/
├── e2e/ # E2E тесты
│   ├── __image_snapshots__/ # Эталонные скриншоты E2E
│   └── test-page/
│       └── index.cy.ts # Пример теста
├── support/
│   ├── commands.js # Кастомные команды (общие)
│   ├── component.ts # Настройки для компонентных тестов

## Быстрый старт

### Компонентные тесты (рекомендуется для UI компонентов)

```bash
# Создать тест рядом с компонентом
# view/components/MyComponent/MyComponent.cy.tsx

# Открыть Cypress UI
npm run cypress:open:component

# Запустить все компонентные тесты
npm run test:component

# Обновить скриншоты
npm run test:component-update
````

### E2E тесты (для полных сценариев)

```bash
# Открыть Cypress UI
npm run cypress:open

# Запустить E2E тесты с dev-сервером
npm run test:e2e

# Запустить в Docker (как в CI/CD)
npm run visual:test
```

│ ├── component-index.html # HTML шаблон для компонентов
│ ├── cypress.d.ts # TypeScript определения
│ └── e2e.js # Настройки окружения E2E
└── tsconfig.json # TypeScript конфигурация

view/components/ # Компонентные тесты
└── ComponentName/
├── index.tsx # Компонент
├── ComponentName.cy.tsx # Компонентный тест
└── **image_snapshots**/ # Скриншоты компонента (генерируются автоматически)

````

## Docker интеграция

### Dockerfile.cypress

Специальный Docker-образ на базе cypress/browsers с:

- Node.js 20.14.0
- Chrome, Firefox, Edge браузеры
- Оптимизированной установкой зависимостей
- Автоматической сборкой приложения

### Скрипты запуска

**packages/cypress/run-screenshots.sh**

Запускает визуальные тесты в Docker:
- Собирает Docker-образ
- Исправляет права доступа к файлам

**packages/cypress/update-screenshots.sh**

Обновляет эталонные скриншоты:
- Запускает тесты с флагом обновления
- Извлекает новые скриншоты из контейнера
- Копирует их в локальную файловую систему

## NPM скрипты

## GitHub Actions

### Workflow: front-test-screenshots.yml

Этот workflow содержит два job'а:

#### 1. E2E Visual Tests
- Запускается в Docker для детерминированности
- Тестирует полные страницы через браузер
- Скриншоты сохраняются в `cypress/e2e/__image_snapshots__/`

#### 2. Component Visual Tests
- Запускается на Ubuntu runner (без Docker для скорости)
- Тестирует изолированные React компоненты
- Скриншоты сохраняются в `view/components/**/__image_snapshots__/`
- Быстрее E2E тестов, так как не требует запуска сервера

### Триггеры

```yaml
on:
    workflow_dispatch:  # Ручной запуск
    # pull_request:     # Автоматически на PR (закомментировано)
````

### Артефакты

При ошибках тестов загружаются:

- **E2E:** `visual-test-artifacts-{run_number}` - скриншоты, видео, diff изображения
- **Components:** `component-test-artifacts-{run_number}` - скриншоты компонентов и diff

При успехе всегда загружаются текущие скриншоты для ревью.

### Комментарии в PR

## Кросс-платформенная совместимость

### Почему это важно

Скриншоты могут отличаться между операционными системами из-за:

- Различий в рендеринге шрифтов
- Разных версий браузеров
- Отличий в anti-aliasing
- Особенностей GPU

### Решение для E2E тестов

**Docker** обеспечивает детерминированность:

- Фиксированная версия ОС (Ubuntu)
- Фиксированная версия Chrome
- Одинаковое окружение локально и в CI/CD
- Используйте `npm run visual:test` для локального запуска

### Решение для компонентных тестов

Компонентные тесты **не требуют Docker**, так как:

1. Тестируются изолированные компоненты без сложного окружения
2. Baseline скриншоты создаются в CI/CD (Ubuntu)
3. Локальная разработка использует `pluginVisualRegressionUpdateImages=true`
4. Меньше различий в рендеринге простых компонентов

**Важно:** Всегда обновляйте baseline скриншоты через CI/CD или в Docker для E2E.

При падении тестов в PR автоматически добавляется комментарий с:

- Описанием проблемы
- Ссылкой на артефакты
- Инструкцией по исправлению

### Локальная разработка

```bash
# E2E тесты
npm run cypress:open              # Открыть Cypress UI для E2E
npm run test:e2e                  # Запустить E2E тесты с dev-сервером
npm run test:e2e-update           # Обновить скриншоты E2E

# Компонентные тесты
npm run cypress:open:component    # Открыть Cypress UI для компонентов
npm run test:component            # Запустить все компонентные тесты
npm run test:component-update     # Обновить скриншоты компонентов
```

### Docker (для CI/CD)

```bash
npm run visual:test    # Запустить визуальные тесты в Docker
npm run visual:update  # Обновить скриншоты в Docker
```

## CI/CD интеграция

### GitHub Actions

Workflow `screenshot-tests.yml` выполняет:

- Кеширование Cypress и зависимостей
- Сборку Docker-образа
- Запуск визуальных тестов
- Загрузку артефактов при ошибках
- Комментирование PR при неудачных тестах

### Артефакты

При ошибках сохраняются:

- Скриншоты ошибок
- Видео выполнения тестов
- Diff-изображения различий

## Написание тестов

### E2E тесты

Размещаются в директории `cypress/e2e/`.

```typescript
// cypress/e2e/feature/feature.cy.ts
describe('Feature Name', () => {
    beforeEach(() => {
        cy.cleanState();
    });

    it('should test specific behavior', () => {
        cy.visit('/page');
        cy.waitForPageLoad();

        // Проверки функциональности
        cy.get('[data-testid="element"]').should('be.visible');

        // Визуальная проверка
        cy.matchImageSnapshot('feature-state');
    });
});
```

### Компонентные тесты

**Важно:** Компонентные тесты размещаются **рядом с компонентом** в той же директории, с суффиксом `.cy.tsx`.

```typescript
// view/components/InfoBlock/InfoBlock.cy.tsx
import React from 'react';
import { InfoBlock } from './index';

describe('InfoBlock Component', () => {
  it('should render with title and value', () => {
    // Монтируем компонент
    cy.mount(<InfoBlock title="Название" value="Значение" />);

    // Проверки функциональности
    cy.get('[data-index="InfoBlock"]').should('be.visible');
    cy.contains('Название:').should('be.visible');

    // Визуальный снимок компонента
    cy.matchComponentSnapshot('info-block-with-value');
  });

  it('should render with empty value', () => {
    cy.mount(<InfoBlock title="Пустое поле" value={null} />);

    cy.contains('-').should('be.visible');
    cy.matchComponentSnapshot('info-block-empty');
  });
});
```

#### Преимущества компонентного тестирования

1. **Быстрее** - не нужно запускать весь сервер
2. **Изолированность** - тестируется только компонент
3. **Скриншоты рядом с кодом** - в папке `__image_snapshots__/` компонента
4. **Простота отладки** - меньше зависимостей

#### Когда использовать компонентные тесты

✅ **Используйте для:**

- UI компонентов без сложной бизнес-логики
- Визуальных состояний компонентов (loading, error, success)
- Адаптивности и различных размеров
- Изолированных форм и инпутов

❌ **Не используйте для:**

- Интеграционных сценариев
- Тестов требующих роутинг
- Сложных пользовательских флоу
- Тестов с реальным API

### Рекомендации по именованию

- Используйте описательные имена для скриншотов
- Включайте состояние или действие: `homepage-loaded`, `modal-opened`
- Избегайте динамических данных в именах

### Селекторы

Приоритет селекторов:

1. `[data-cy="..."]` - Cypress-специфичные атрибуты
2. Семантические селекторы (`button`, `input[type="email"]`)
3. CSS классы (только стабильные)

## Что тестировать

### E2E тесты - обязательно тестировать

- Критические пользовательские сценарии
- Основные страницы приложения
- Формы и их валидация
- Навигация между страницами
- Адаптивность на разных разрешениях
- Интеграция с API

### Компонентные тесты - рекомендуется тестировать

- Переиспользуемые UI компоненты
- Различные состояния компонентов
- Визуальные вариации (размеры, цвета, темы)
- Компоненты с интерактивностью
- Компоненты форм

### Визуальное тестирование

**E2E скриншоты:**

## Кастомные команды

### Команды для E2E тестов

```typescript
cy.waitForPageLoad(timeout); // Ожидание загрузки страницы
cy.matchImageSnapshot(name); // Создание скриншота страницы
cy.cleanState(); // Очистка cookies, localStorage, sessionStorage
```

### Команды для компонентных тестов

```typescript
cy.mount(<Component />)          // Монтирование React компонента
cy.waitForComponentRender()      // Ожидание стабилизации рендера
cy.matchComponentSnapshot(name)  // Создание скриншота компонента
```

## Рекомендации для компонентных тестов

### 1. Размещение тестов

- ✅ Тесты рядом с компонентом: `ComponentName.cy.tsx`
- ✅ Скриншоты в `__image_snapshots__/` внутри папки компонента
- ❌ Не размещайте компонентные тесты в `cypress/e2e/`

### 2. Изоляция

```typescript
// ✅ Хорошо - компонент полностью изолирован
cy.mount(<Button onClick={handleClick}>Click me</Button>);

// ❌ Плохо - зависимость от роутера или стора
cy.mount(<PageComponent />); // Используйте E2E для этого
```

### 3. Мокирование данных

```typescript
// ✅ Хорошо - передаем конкретные пропсы
cy.mount(
  <UserCard
    name="Иван Иванов"
    email="ivan@example.com"
    status="active"
  />
);

// ❌ Плохо - зависимость от API
cy.mount(<UserCardContainer userId={123} />);
```

### 4. Тестирование состояний

```typescript
describe('Button Component', () => {
  it('should render default state', () => {
    cy.mount(<Button>Click me</Button>);
    cy.matchComponentSnapshot('button-default');
  });

  it('should render disabled state', () => {
    cy.mount(<Button disabled>Click me</Button>);
    cy.matchComponentSnapshot('button-disabled');
  });

  it('should render loading state', () => {
    cy.mount(<Button isLoading>Click me</Button>);
    cy.matchComponentSnapshot('button-loading');
  });
});
```

### 5. Адаптивность

```typescript
it('should be responsive', () => {
  cy.mount(<ResponsiveCard title="Test" />);

  // Десктоп
  cy.viewport(1280, 720);
  cy.matchComponentSnapshot('card-desktop');

  // Планшет
  cy.viewport(768, 1024);
  cy.matchComponentSnapshot('card-tablet');

  // Мобильный
  cy.viewport(375, 667);
  cy.matchComponentSnapshot('card-mobile');
});
```

## Отладка

### Локальная отладка компонентов

```bash
# Открыть Cypress UI для компонентов
npm run cypress:open:component

# Выберите компонент для отладки
# Cypress откроет интерактивный браузер
```

### Просмотр скриншотов

Скриншоты компонентов хранятся в:

```
view/components/ComponentName/__image_snapshots__/
├── component-test-name #0.png
└── component-test-name #1.png
```

### При ошибках визуальных тестов

1. Проверьте diff-изображения в артефактах CI/CD
2. Если изменения корректны - обновите baseline:
    ```bash
    npm run test:component-update
    ```
3. Закоммитьте обновленные скриншоты

- Базовые страницы
- После сильных визуальных изменений
- Модальные окна и попапы
- Мобильные версии страниц

**Компонентные скриншоты:**

- Каждое состояние компонента
- Различные пропсы и конфигурации
- Edge cases (пустые данные, длинные тексты)

## Page Object Model

```javascript
// cypress/support/pages/LoginPage.js
class LoginPage {
    // Селекторы
    get emailInput() {
        return cy.get('[data-testid="email-input"]');
    }
    get passwordInput() {
        return cy.get('[data-testid="password-input"]');
    }
    get submitButton() {
        return cy.get('[data-testid="submit-button"]');
    }
    get errorMessage() {
        return cy.get('[data-testid="error-message"]');
    }

    // Действия
    visit() {
        cy.visit('/login');
        cy.waitForPageLoad();
    }

    fillEmail(email) {
        this.emailInput.clear().type(email);
        return this;
    }

    fillPassword(password) {
        this.passwordInput.clear().type(password);
        return this;
    }

    submit() {
        this.submitButton.click();
        return this;
    }

    login(email, password) {
        this.fillEmail(email).fillPassword(password).submit();
        return this;
    }

    // Проверки
    shouldShowError(message) {
        this.errorMessage.should('be.visible').and('contain', message);
        return this;
    }

    shouldRedirectToDashboard() {
        cy.url().should('include', '/dashboard');
        return this;
    }
}

export default LoginPage;
```

```typescript
// cypress/e2e/auth/login.cy.ts
import LoginPage from '../support/pages/LoginPage';

describe('Login Flow', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.cleanState();
    });

    it('should login with valid credentials', () => {
        loginPage
            .visit()
            .login('user@example.com', 'password123')
            .shouldRedirectToDashboard();
    });

    it('should show error with invalid credentials', () => {
        loginPage
            .visit()
            .login('invalid@example.com', 'wrongpassword')
            .shouldShowError('Неверные учетные данные');
    });
});
```
