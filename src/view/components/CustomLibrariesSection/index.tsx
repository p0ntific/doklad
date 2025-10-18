import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { Wrench, Zap, Shield, TrendingUp, X, Check } from "lucide-react";

export const CustomLibrariesSection = memo(() => {
    const [activeTab, setActiveTab] = useState<"navigation" | "pageProvider">(
        "navigation"
    );

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
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                            Кастомные решения под специфику проекта.
                        </p>
                    </FadeIn>

                    <div className="flex gap-3 mb-8">
                        <button
                            onClick={() => setActiveTab("navigation")}
                            className={`px-6 py-3 font-bold transition-all ${
                                activeTab === "navigation"
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            Navigation
                        </button>
                        <button
                            onClick={() => setActiveTab("pageProvider")}
                            className={`px-6 py-3 font-bold transition-all ${
                                activeTab === "pageProvider"
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                            PageProvider
                        </button>
                    </div>

                    {activeTab === "navigation" && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-red-50 border-2 border-red-300 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <X className="w-6 h-6 text-red-600" />
                                        <h3 className="text-xl font-bold">
                                            Базовый роутинг
                                        </h3>
                                    </div>
                                    <div className="bg-gray-900 p-4 rounded font-mono text-xs text-gray-100 mb-4">
                                        <div className="text-red-400">
                                            const [search, setSearch] =
                                        </div>
                                        <div className="ml-4">
                                            useState&lt;string&gt;()
                                        </div>
                                        <div className="mt-2 text-gray-400">
                                            {"// ✗ Нет типизации параметров"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✗ Нет валидации"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✗ Ручная синхронизация с URL"}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Ошибки типизации в рантайме
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Невалидные значения в URL
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>Много boilerplate кода</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Check className="w-6 h-6 text-green-600" />
                                        <h3 className="text-xl font-bold">
                                            packages/navigation
                                        </h3>
                                    </div>
                                    <div className="bg-gray-900 p-4 rounded font-mono text-xs text-gray-100 mb-4">
                                        <div className="text-green-400">
                                            const [search, setSearch] =
                                        </div>
                                        <div className="ml-4">
                                            useQueryState('admin', 'search')
                                        </div>
                                        <div className="mt-2 text-gray-400">
                                            {"// ✓ Полная типизация"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✓ Zod валидация"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✓ Авто-синхронизация"}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Автогенерация типов из роутов
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Валидация query параметров
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>SEO-friendly маски URL</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "pageProvider" && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="bg-red-50 border-2 border-red-300 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <X className="w-6 h-6 text-red-600" />
                                        <h3 className="text-xl font-bold">
                                            Обычный подход
                                        </h3>
                                    </div>
                                    <div className="bg-gray-900 p-4 rounded font-mono text-xs text-gray-100 mb-4">
                                        <div className="text-red-400">
                                            const data = await fetch('/api')
                                        </div>
                                        <div className="text-red-400">
                                            return {"<Page data={data} />"}
                                        </div>
                                        <div className="mt-2 text-gray-400">
                                            {"// ✗ Дублирование запросов"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✗ Нет префетчинга"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✗ Waterfall загрузки"}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Медленная загрузка страницы
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>Повторные запросы к API</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Сложная обработка ошибок
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Check className="w-6 h-6 text-green-600" />
                                        <h3 className="text-xl font-bold">
                                            packages/pageProvider
                                        </h3>
                                    </div>
                                    <div className="bg-gray-900 p-4 rounded font-mono text-xs text-gray-100 mb-4">
                                        <div className="text-green-400">
                                            export const pageProvider = {"{"}
                                        </div>
                                        <div className="ml-4">
                                            queries: [getUserQuery],
                                        </div>
                                        <div className="ml-4">
                                            prefetch: true
                                        </div>
                                        <div className="text-green-400">
                                            {"}"}
                                        </div>
                                        <div className="mt-2 text-gray-400">
                                            {"// ✓ Автоматический префетч"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✓ Параллельная загрузка"}
                                        </div>
                                        <div className="text-gray-400">
                                            {"// ✓ Умное кэширование"}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Префетч данных на сервере
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>
                                                Параллельная загрузка queries
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>Единый error handling</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

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
