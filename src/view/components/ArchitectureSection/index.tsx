import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Layers, ArrowRight, Folder } from "lucide-react";

export const ArchitectureSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-20 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <FadeIn>
                                <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                                    Практики • Структура
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
                                    Архитектура
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Чёткое разделение ответственности по слоям и
                                    модулям.
                                </p>
                            </FadeIn>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 py-2 border-b border-gray-300">
                                    <Folder className="w-5 h-5" />
                                    <span className="font-bold">view/</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        UI, компоненты, стили
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 py-2 border-b border-gray-300">
                                    <Folder className="w-5 h-5" />
                                    <span className="font-bold">server/</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        API, queries, mutations
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 py-2 border-b border-gray-300">
                                    <Folder className="w-5 h-5" />
                                    <span className="font-bold">packages/</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        Переиспользуемые модули
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 py-2 border-b border-gray-300">
                                    <Folder className="w-5 h-5" />
                                    <span className="font-bold">app/</span>
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-gray-600">
                                        Next.js App Router
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white border border-gray-200 p-6 h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold">
                                        Структура проекта
                                    </h3>
                                </div>
                                <div className="bg-gray-900 text-gray-100 p-6 font-mono text-sm h-[450px] overflow-auto">
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
