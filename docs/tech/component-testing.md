# Component Testing с Cypress и Vite

## ✅ Решенные проблемы

### 1. ES-модуль ошибка с Next.js
Переход на **Vite** для компонентного тестирования решил проблему с `require() of ES Module`.

**Изменения:**
- Обновлен Cypress до версии 15.4.0
- Установлен Vite как dev-зависимость
- Настроен Vite в [`cypress.config.ts`](../cypress.config.ts) вместо Next.js webpack
- Исправлен [`cypress/support/component-index.html`](../cypress/support/component-index.html) - добавлен `data-cy-root`

### 2. Визуальное регрессионное тестирование
Используется плагин **`cypress-image-diff-js`** для сравнения скриншотов компонентов.

## 📦 Установленные пакеты

```bash
npm install -D cypress@latest vite @vitejs/plugin-react @cypress/vite-dev-server cypress-image-diff-js
```

## ⚙️ Конфигурация

### [`cypress.config.ts`](../cypress.config.ts)
```typescript
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: {
                plugins: [react()],
                resolve: {
                    alias: {
                        '@': path.resolve(__dirname, '.'),
                        '@/view': path.resolve(__dirname, './view'),
                        // ... другие aliases
                    },
                },
            },
        },
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);
            codeCoverageTask(on, config);
        },
        // ... другие настройки
    },
});
```

### [`cypress/support/component.ts`](../cypress/support/component.ts)
```typescript
import { mount } from 'cypress/react';
import compareSnapshotCommand from 'cypress-image-diff-js/command';

// Регистрируем команду для сравнения скриншотов
compareSnapshotCommand();

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('matchComponentSnapshot', (name: string, threshold = 0.0) => {
    cy.waitForComponentRender();

    cy.get('body').then(($body) => {
        $body.find('*').css('cursor', 'default');
        $body.find('*:focus').blur();
    });

    cy.compareSnapshot(name, threshold);
});
```

## 🧪 Пример теста

```typescript
import { InfoBlock } from './';

describe('InfoBlock', () => {
    it('base', () => {
        cy.mount(<InfoBlock title='Название' value='Значение' />);
        cy.matchComponentSnapshot('info-block-base', 0.0);
    });

    it('no-value', () => {
        cy.mount(<InfoBlock title='Пустое поле' value={null} />);
        cy.matchComponentSnapshot('info-block-empty', 0.0);
    });
});
```

## 📁 Структура скриншотов

После запуска тестов создается папка `cypress-image-diff-screenshots/`:

```
cypress-image-diff-screenshots/
├── baseline/          # Базовые изображения (commit в git)
│   ├── ComponentName-test-name.png
│   └── ...
├── comparison/        # Новые изображения для сравнения
│   ├── ComponentName-test-name.png
│   └── ...
└── diff/             # Изображения с различиями (только при ошибках)
    ├── ComponentName-test-name.png
    └── ...
```

## 🚀 Команды

```bash
# Запуск компонентных тестов
npm run test:component

# Открыть Cypress UI для компонентных тестов
npm run cypress:open:component

# Обновить базовые скриншоты (удалить baseline и запустить тесты)
rm -rf cypress-image-diff-screenshots/baseline && npm run test:component
```

## ✅ Как работает визуальное тестирование

1. **Первый запуск**: Создаются baseline изображения
2. **Последующие запуски**: Новые скриншоты сравниваются с baseline
3. **При различиях**:
   - Тест падает с ошибкой `Image difference greater than threshold`
   - Создается diff изображение с визуализацией различий
   - В папке `comparison/` сохраняется новое изображение

4. **Обновление baseline**:
   - Если изменения намеренные, удалите baseline скриншоты
   - Запустите тесты заново
   - Закоммитьте новые baseline изображения

## 🎯 Threshold (Порог различия)

```typescript
// Строгое сравнение (0% различий)
cy.matchComponentSnapshot('component', 0.0);

// С небольшой погрешностью (5% различий допустимо)
cy.matchComponentSnapshot('component', 0.05);
```

## 📝 Best Practices

### 1. Стабилизация компонента
```typescript
it('test', () => {
    cy.mount(<Component />);

    // Дождитесь загрузки данных
    cy.contains('Expected Text').should('be.visible');

    // Теперь делайте скриншот
    cy.matchComponentSnapshot('stable-state', 0.0);
});
```

### 2. Убирайте динамический контент
```typescript
it('test', () => {
    // Используйте фиксированные данные
    const fixedDate = new Date('2024-01-01');
    cy.clock(fixedDate);

    cy.mount(<Component date={fixedDate} />);
    cy.matchComponentSnapshot('with-date', 0.0);
});
```

### 3. Commit baseline в Git
```bash
# Добавьте в .gitignore
echo "cypress-image-diff-screenshots/comparison/" >> .gitignore
echo "cypress-image-diff-screenshots/diff/" >> .gitignore

# Commit только baseline
git add cypress-image-diff-screenshots/baseline/
git commit -m "Add visual regression baselines"
```

## 🐛 Troubleshooting

### Тесты всегда падают
- Проверьте, что baseline изображения существуют
- Убедитесь, что компонент стабилен перед скриншотом
- Проверьте threshold - возможно, нужно увеличить

### Изображения в разных разрешениях
- Cypress использует фиксированный viewport (1280x720 по умолчанию)
- Убедитесь, что viewport не меняется между запусками

### Различия в шрифтах
- Может отличаться на разных ОС
- Используйте Docker для CI/CD с фиксированной ОС

## 🔗 Полезные ссылки

- [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/overview)
- [cypress-image-diff-js](https://github.com/uktrade/cypress-image-diff-js)
- [Cypress with Vite](https://docs.cypress.io/guides/component-testing/react/quickstart)
