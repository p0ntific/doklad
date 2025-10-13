import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Zap, Accessibility, Paintbrush, Settings } from "lucide-react";

export const UiKitSection = memo(() => {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const features = [
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Скорость разработки",
            description:
                "Не пишем кнопки и инпуты с нуля. Фокус на бизнес-логике, не на базовых компонентах.",
        },
        {
            icon: <Accessibility className="w-12 h-12" />,
            title: "Доступность (A11y)",
            description:
                "Навигация с клавиатуры, screen reader support, ARIA атрибуты — всё из коробки.",
        },
        {
            icon: <Paintbrush className="w-12 h-12" />,
            title: "Единообразие",
            description:
                "Весь интерфейс выглядит консистентно. Дизайн-система, а не набор разных компонентов.",
        },
        {
            icon: <Settings className="w-12 h-12" />,
            title: "Гибкая кастомизация",
            description:
                "Темизация через CSS variables, variants API, интеграция с Tailwind CSS.",
        },
    ];

    return (
        <section className="h-screen flex items-center py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Инструменты • Сегодня
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            UI-Kit
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Hero UI (NextUI) — современный компонентный
                            фреймворк для React. Готовые компоненты, доступность
                            из коробки, кастомизация через Tailwind.
                        </p>
                    </FadeIn>

                    <div className="space-y-3">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                onMouseEnter={() => setHoveredFeature(idx)}
                                onMouseLeave={() => setHoveredFeature(null)}
                                className={`border-l-4 transition-all duration-300 ${
                                    hoveredFeature === idx
                                        ? "border-black bg-gray-50 pl-12"
                                        : "border-gray-300 pl-8"
                                }`}
                            >
                                <div className="py-6 flex items-start gap-6">
                                    <div
                                        className={`transition-transform duration-300 ${
                                            hoveredFeature === idx
                                                ? "scale-110"
                                                : "scale-100"
                                        }`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3
                                            className={`text-2xl font-bold mb-3 transition-all ${
                                                hoveredFeature === idx
                                                    ? "text-3xl"
                                                    : ""
                                            }`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            className={`text-gray-700 transition-opacity ${
                                                hoveredFeature === idx
                                                    ? "opacity-100"
                                                    : "opacity-70"
                                            }`}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
