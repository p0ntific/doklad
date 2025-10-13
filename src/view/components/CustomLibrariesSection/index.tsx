import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { Wrench, Zap, Shield, TrendingUp } from "lucide-react";

export const CustomLibrariesSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Практики • Кастомные решения
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            Свои пакеты
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Кастомные библиотеки под специфику проекта. Скорость
                            разработки, SEO, производительность.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <ScaleIn delay={0.5}>
                            <div className="bg-gray-50 p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Wrench className="w-10 h-10" />
                                    <h3 className="text-2xl font-bold">
                                        packages/navigation
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Типобезопасный роутинг с автогенерацией
                                    типов
                                </p>
                                <div className="bg-white p-4 border border-gray-200 font-mono text-xs">
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
                            <div className="bg-gray-50 p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-10 h-10" />
                                    <h3 className="text-2xl font-bold">
                                        packages/api-client
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Unified API layer с автоматическим ретраем и
                                    кэшированием
                                </p>
                                <div className="bg-white p-4 border border-gray-200 font-mono text-xs">
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

                    <div className="grid grid-cols-3 gap-6">
                        <ScaleIn delay={0.7}>
                            <div className="bg-white p-6 border border-gray-200 text-center">
                                <TrendingUp className="w-10 h-10 mx-auto mb-3" />
                                <div className="text-3xl font-black mb-2">
                                    3x
                                </div>
                                <p className="text-sm text-gray-600">
                                    Быстрее разработка фич
                                </p>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.8}>
                            <div className="bg-white p-6 border border-gray-200 text-center">
                                <Zap className="w-10 h-10 mx-auto mb-3" />
                                <div className="text-3xl font-black mb-2">
                                    -40%
                                </div>
                                <p className="text-sm text-gray-600">
                                    Меньше бойлерплейта
                                </p>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.9}>
                            <div className="bg-white p-6 border border-gray-200 text-center">
                                <Shield className="w-10 h-10 mx-auto mb-3" />
                                <div className="text-3xl font-black mb-2">
                                    100%
                                </div>
                                <p className="text-sm text-gray-600">
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
