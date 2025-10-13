import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { TestTube, Camera } from "lucide-react";

export const TestingSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Качество • Автоматизация
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black mb-6 sm:mb-12 leading-none">
                            Тестирование
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-16">
                            Cypress — инструмент для автоматизации тестирования.
                            E2E тесты проверяют полные сценарии, скриншотные
                            ловят визуальные регрессии.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
                        <ScaleIn delay={0.5}>
                            <div className="bg-white border border-gray-200 p-6 sm:p-10">
                                <TestTube className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                                    E2E тесты
                                </h3>
                                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                                    End-to-End тестирование.
                                </p>
                                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                                    <li>
                                        • Проверка реальных сценариев
                                        пользователя
                                    </li>
                                    <li>
                                        • Авторизация, навигация, взаимодействие
                                    </li>
                                    <li>
                                        • Гарантия работы всех систем в связке
                                    </li>
                                    <li>
                                        • Автоматический прогон перед деплоем
                                    </li>
                                </ul>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.6}>
                            <div className="bg-white border border-gray-200 p-6 sm:p-10">
                                <Camera className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                                    Скриншотные тесты
                                </h3>
                                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                                    Визуальное регрессионное тестирование.
                                </p>
                                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                                    <li>
                                        • Сравнение с эталонными скриншотами
                                    </li>
                                    <li>• Выявление визуальных багов</li>
                                    <li>
                                        • Предотвращение случайных изменений UI
                                    </li>
                                    <li>• Контроль на мобильных и десктопе</li>
                                </ul>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </div>
        </section>
    );
});
