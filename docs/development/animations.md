# Слой анимаций в архитектуре View

🎯 Принцип организации

Все анимации изолированы в `view/animations/`

```bash
src/
└── view/
    ├── animations/                           # 🎯 Единственное место для анимаций
	    ├──ButtonAnimations                   # Модуль анимаций для кнопок (к примеру)
    	│   ├── ButtonAnimationsProvider.tsx  # Контекст анимации (опционален)
    	│   ├── hooks/                        # Хуки
    	│   ├── ButtonAlertAnimation/         # Компонент-обертка для работы анимации (на каждую анимацию в приложении имеем такой компонент-обёртку)
        └── presets/                          # Готовые конфигурации
```

📁 Структура animations/

providers/ - Контексты

```ts
// view/animations/ButtonAnimations/DockProvider.tsx
export const ButtonAnimationsProvider = ({ children, config }) => {
    const mouseX = useMotionValue(Infinity);
    const scale = useSpring(
        useTransform(mouseX, [-100, 0, 100], [0.8, 1.2, 0.8])
    );

    return (
        <ButtonAnimations.Provider value={{ mouseX, scale }}>
            {children}
        </ButtonAnimations.Provider>
    );
};
```

hooks/ - Анимационная логика

```ts
// view/animations/ButtonAnimations/hooks/useDockItem.ts
export const useButtonAlertItem = () => {
    const { mouseX } = ButtonAnimationsProvider();
    const ref = useRef<HTMLElement>(null);

    const distance = useTransform(mouseX, x =>
        ref.current ? x - ref.current.getBoundingClientRect().x : 0
    );

    return { ref, style: { scale: useSpring(distance) } };
};
```

Готовые компоненты

```ts
// view/animations/cards/AnimatedCard/index.tsx
export const AnimatedCard = ({ children }) => {
    const { ref, style } = useCardAnimation();
    return (
        <motion.div ref={ref} style={style}>
            {children}
        </motion.div>
    );
};
```

presets/ - Конфигурации

```ts
// view/animations/presets/transitions.ts
export const BUTTON_TRANSITIONS = {
    smooth: { type: 'spring', stiffness: 100, damping: 15 },
    quick: { duration: 0.2 },
    bounce: { type: 'spring', bounce: 0.4 },
} as const;
```

🚫 Ограничения импорта

ВАЖНО: Импорт motion разрешен ТОЛЬКО в папке view/animations/.

📖 Использование

Для использования анимаций в других частях приложения импортируйте готовые компоненты:

```ts
// view/components/ProductCard.tsx
import { AnimatedCard } from '@/view/animations/cards/AnimatedCard/index.tsx';
import { Card } from '@/view/components/Card';
import { FadeIn } from '@/view/animations/components/FadeIn';

export const ProductCard = ({ product }) => (
    <FadeIn>
        <AnimatedCard>
			<Card>
            	<h3>{product.name}</h3>
           	 	<p>{product.description}</p>
			</Card>
        </AnimatedCard>
    </FadeIn>
);
```
