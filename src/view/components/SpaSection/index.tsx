import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { Component, GitBranch, Package, Loader2 } from "lucide-react";

export const SpaSection = memo(() => {
    const [activePage, setActivePage] = useState<"home" | "clients" | "code">(
        "home"
    );
    const [isLoading, setIsLoading] = useState(false);

    const handlePageChange = (page: "home" | "clients" | "code") => {
        if (page === "clients") {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
        }
        setActivePage(page);
    };

    return (
        <section className="h-screen flex items-center py-16 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 text-center uppercase">
                            Эра 2 • 2010-2015
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none text-center tracking-tighter">
                            SPA
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="bg-white border-2 border-gray-300">
                            <div className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2">
                                <div className="text-xs text-gray-600 mb-1">
                                    http://example-spa.com
                                </div>
                            </div>

                            <div className="flex border-b border-gray-300">
                                <button
                                    onClick={() => handlePageChange("home")}
                                    className={`px-6 py-3 border-r border-gray-300 transition-colors ${
                                        activePage === "home"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Главная
                                </button>
                                <button
                                    onClick={() => handlePageChange("clients")}
                                    className={`px-6 py-3 border-r border-gray-300 transition-colors ${
                                        activePage === "clients"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Клиенты
                                </button>
                                <button
                                    onClick={() => handlePageChange("code")}
                                    className={`px-6 py-3 transition-colors ${
                                        activePage === "code"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Код
                                </button>
                            </div>

                            <div className="p-8 h-[400px] overflow-auto">
                                {activePage === "home" && (
                                    <div className="space-y-6">
                                        <div className="text-6xl font-black mb-6">
                                            React
                                        </div>
                                        <p className="text-xl text-gray-700 leading-relaxed">
                                            Разработка Facebook. Компонентный
                                            подход изменил фронтенд навсегда.
                                        </p>
                                        <div className="grid grid-cols-3 gap-4 mt-8">
                                            <ScaleIn delay={0.1}>
                                                <div className="bg-gray-50 p-6 border border-gray-200">
                                                    <Component className="w-10 h-10 mb-3" />
                                                    <div className="font-bold mb-2">
                                                        Компоненты
                                                    </div>
                                                    <p className="text-sm text-gray-600">
                                                        Переиспользуемые блоки
                                                    </p>
                                                </div>
                                            </ScaleIn>
                                            <ScaleIn delay={0.2}>
                                                <div className="bg-gray-50 p-6 border border-gray-200">
                                                    <GitBranch className="w-10 h-10 mb-3" />
                                                    <div className="font-bold mb-2">
                                                        Virtual DOM
                                                    </div>
                                                    <p className="text-sm text-gray-600">
                                                        Быстрые обновления
                                                    </p>
                                                </div>
                                            </ScaleIn>
                                            <ScaleIn delay={0.3}>
                                                <div className="bg-gray-50 p-6 border border-gray-200">
                                                    <Package className="w-10 h-10 mb-3" />
                                                    <div className="font-bold mb-2">
                                                        Экосистема
                                                    </div>
                                                    <p className="text-sm text-gray-600">
                                                        Библиотеки и тулинг
                                                    </p>
                                                </div>
                                            </ScaleIn>
                                        </div>
                                    </div>
                                )}

                                {activePage === "clients" && (
                                    <div className="flex items-center justify-center h-full">
                                        {isLoading ? (
                                            <div className="text-center">
                                                <Loader2 className="w-16 h-16 animate-spin mx-auto mb-4" />
                                                <p className="text-xl text-gray-600">
                                                    Загрузка данных...
                                                </p>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    Проблема SPA: пустая
                                                    страница до загрузки
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4 w-full">
                                                <div className="text-3xl font-bold mb-6">
                                                    Наши клиенты
                                                </div>
                                                {[
                                                    "Компания А",
                                                    "Компания Б",
                                                    "Компания В",
                                                ].map((client, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-gray-50 p-4 border border-gray-200"
                                                    >
                                                        <div className="font-bold">
                                                            {client}
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            Партнёр с 202{idx}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activePage === "code" && (
                                    <div className="space-y-6">
                                        <div className="text-3xl font-bold mb-4">
                                            Преимущества React
                                        </div>
                                        <div className="bg-gray-50 p-6 border border-gray-200 font-mono text-sm">
                                            <div className="text-gray-600">
                                                const Button = ({"{"} text {"}"}
                                                ) =&gt; (
                                            </div>
                                            <div className="ml-4 text-gray-600">
                                                &lt;button className="btn"&gt;
                                            </div>
                                            <div className="ml-8 text-gray-600">
                                                {"{"}text{"}"}
                                            </div>
                                            <div className="ml-4 text-gray-600">
                                                &lt;/button&gt;
                                            </div>
                                            <div className="text-gray-600">
                                                );
                                            </div>
                                        </div>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span>•</span>
                                                <span>
                                                    Переиспользуемый компонент
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span>•</span>
                                                <span>
                                                    Декларативный синтаксис
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span>•</span>
                                                <span>
                                                    Легко тестировать и
                                                    поддерживать
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
});
