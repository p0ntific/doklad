import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { Wrench, Zap, Shield, TrendingUp } from "lucide-react";

export const CustomLibrariesSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Практики • Кастомные решения
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-12 leading-none">
                            Свои пакеты
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-16">
                            Кастомные библиотеки под специфику проекта. Скорость
                            разработки, SEO, производительность.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
                        <ScaleIn delay={0.5}>
                            <div className="bg-gray-50 p-4 sm:p-8 border border-gray-200">
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <Wrench className="w-8 h-8 sm:w-10 sm:h-10" />
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                                        packages/navigation
                                    </h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    Типобезопасный роутинг с автогенерацией
                                    типов
                                </p>
                                <div className="bg-white p-3 sm:p-4 border border-gray-200 font-mono text-[10px] sm:text-xs">
                                    <div className="text-gray-600">
                                        useQueryState('page', 'filter')
                                    </div>
                                    <div className="text-green-600 mt-2">
                                        // ✓ Полная типизация
                                    </div>
                                    <div className="text-green-600">
                                        // ✓ Валидация через Zod
                                    </div>
                                </div>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.6}>
                            <div className="bg-gray-50 p-4 sm:p-8 border border-gray-200">
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                                        packages/api-client
                                    </h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    Unified API layer с автоматическим ретраем и
                                    кэшированием
                                </p>
                                <div className="bg-white p-3 sm:p-4 border border-gray-200 font-mono text-[10px] sm:text-xs">
                                    <div className="text-gray-600">
                                        const {"{"} data {"}"} =
                                        useApi('/users')
                                    </div>
                                    <div className="text-green-600 mt-2">
                                        // ✓ Авто-ретраи
                                    </div>
                                    <div className="text-green-600">
                                        // ✓ Оптимистичные обновления
                                    </div>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-6">
                        <ScaleIn delay={0.7}>
                            <div className="bg-white p-3 sm:p-6 border border-gray-200 text-center">
                                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3" />
                                <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2">
                                    3x
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Быстрее разработка фич
                                </p>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.8}>
                            <div className="bg-white p-3 sm:p-6 border border-gray-200 text-center">
                                <Zap className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3" />
                                <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2">
                                    -40%
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Меньше бойлерплейта
                                </p>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.9}>
                            <div className="bg-white p-3 sm:p-6 border border-gray-200 text-center">
                                <Shield className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3" />
                                <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2">
                                    100%
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Покрытие тестами
                                </p>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </div>
        </section>
    );
});
