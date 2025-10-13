import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { TestTube, Camera } from "lucide-react";

export const TestingSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Качество • Автоматизация
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            Тестирование
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Cypress — инструмент для автоматизации тестирования.
                            E2E тесты проверяют полные сценарии, скриншотные
                            ловят визуальные регрессии.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <ScaleIn delay={0.5}>
                            <div className="bg-white border border-gray-200 p-10 ">
                                <TestTube className="w-16 h-16 mb-6" />
                                <h3 className="text-4xl font-bold mb-6">
                                    E2E тесты
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    End-to-End тестирование.
                                </p>
                                <ul className="space-y-3 text-gray-600">
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
                            <div className="bg-white border border-gray-200 p-10 ">
                                <Camera className="w-16 h-16 mb-6" />
                                <h3 className="text-4xl font-bold mb-6">
                                    Скриншотные тесты
                                </h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    Визуальное регрессионное тестирование.
                                </p>
                                <ul className="space-y-3 text-gray-600">
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
