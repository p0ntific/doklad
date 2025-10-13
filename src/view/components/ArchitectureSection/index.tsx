import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Layers, ArrowRight, Folder } from "lucide-react";

export const ArchitectureSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-8 sm:py-20 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
                        <div>
                            <FadeIn>
                                <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                                    Практики • Структура
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 leading-none">
                                    Архитектура
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-8">
                                    Чёткое разделение ответственности по слоям и
                                    модулям.
                                </p>
                            </FadeIn>

                            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                                <div className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 border-b border-gray-300">
                                    <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-bold">view/</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        UI, компоненты, стили
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 border-b border-gray-300">
                                    <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-bold">server/</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        API, queries, mutations
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 border-b border-gray-300">
                                    <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-bold">packages/</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        Переиспользуемые модули
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 border-b border-gray-300">
                                    <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="font-bold">app/</span>
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        Next.js App Router
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white border border-gray-200 p-4 sm:p-6 h-full">
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <Layers className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                                        Структура проекта
                                    </h3>
                                    </div>
                                    <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm h-[350px] sm:h-[450px] overflow-auto">
                                    <div className="text-blue-400">server/</div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            pages/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # Префетч провайдеры
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            modules/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # Бизнес-модули
                                        </span>
                                    </div>
                                    <div className="ml-8 text-gray-400">
                                        resources.ts, queries.ts
                                    </div>
                                    <div className="ml-8 text-gray-400">
                                        mutations.ts, controllers/
                                    </div>

                                    <div className="mt-4 text-blue-400">
                                        view/
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            components/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # UI компоненты
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            animations/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # Анимации
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            hooks/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # React хуки
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-yellow-400">
                                            modules/
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            # UI модули
                                        </span>
                                    </div>

                                    <div className="mt-4 text-blue-400">
                                        packages/
                                    </div>
                                    <div className="ml-4 text-gray-400">
                                        navigation/
                                    </div>
                                    <div className="ml-4 text-gray-400">
                                        api-client/
                                    </div>
                                    <div className="ml-4 text-gray-400">
                                        react-query/
                                    </div>
                                    <div className="ml-4 text-gray-400">
                                        i18n/
                                    </div>

                                    <div className="mt-4 text-blue-400">
                                        app/[locale]/
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-green-400">
                                            layout.tsx
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-green-400">
                                            page.tsx
                                        </span>
                                    </div>
                                    <div className="ml-4 text-gray-400">
                                        admin/users/page.tsx
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
