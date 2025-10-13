import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Reveal } from "@/view/animations/Reveal";
import { Zap, Server, Code } from "lucide-react";

export const SsrSection = memo(() => {
    const [activePage, setActivePage] = useState<"server" | "client" | "code">(
        "server"
    );

    return (
        <section className="h-screen flex items-center py-16 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Эра 3 • 2015-Настоящее
                        </div>
                    </FadeIn>

                    <Reveal delay={0.2}>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                            SSR
                        </h2>
                    </Reveal>

                    <FadeIn delay={0.4}>
                        <div className="bg-white border-2 border-gray-300">
                            <div className="border-b-2 border-gray-300 bg-gray-100 px-4 py-2">
                                <div className="text-xs text-gray-600 mb-1">
                                    Next.js Application
                                </div>
                            </div>

                            <div className="flex border-b border-gray-300">
                                <button
                                    onClick={() => setActivePage("server")}
                                    className={`px-6 py-3 border-r border-gray-300 transition-colors ${
                                        activePage === "server"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Server
                                </button>
                                <button
                                    onClick={() => setActivePage("client")}
                                    className={`px-6 py-3 border-r border-gray-300 transition-colors ${
                                        activePage === "client"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Client
                                </button>
                                <button
                                    onClick={() => setActivePage("code")}
                                    className={`px-6 py-3 transition-colors ${
                                        activePage === "code"
                                            ? "bg-white font-bold"
                                            : "bg-gray-50 hover:bg-gray-100"
                                    }`}
                                >
                                    Code
                                </button>
                            </div>

                            <div className="p-8 h-[400px] overflow-auto">
                                {activePage === "server" && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Server className="w-12 h-12" />
                                            <div className="text-4xl font-black">
                                                Серверный рендеринг
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-700">
                                            HTML генерируется на сервере.
                                            Пользователь получает готовую
                                            разметку.
                                        </p>
                                        <div className="bg-gray-50 p-6 border border-gray-200">
                                            <div className="text-sm font-bold mb-3">
                                                Процесс:
                                            </div>
                                            <div className="space-y-2 text-sm text-gray-700">
                                                <div>
                                                    1. Запрос от клиента →
                                                </div>
                                                <div>
                                                    2. Сервер получает данные →
                                                </div>
                                                <div>3. Рендер HTML →</div>
                                                <div>
                                                    4. Отправка готовой страницы
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePage === "client" && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Zap className="w-12 h-12" />
                                            <div className="text-4xl font-black">
                                                Гидратация
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-700">
                                            JS подключает интерактивность к уже
                                            готовой HTML-разметке.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="bg-green-50 border-l-4 border-green-500 p-4">
                                                <div className="font-bold text-green-900 mb-1">
                                                    ✓ Мгновенный контент
                                                </div>
                                                <div className="text-sm text-green-700">
                                                    Пользователь видит страницу
                                                    сразу
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                                                <div className="font-bold text-blue-900 mb-1">
                                                    ✓ SEO-friendly
                                                </div>
                                                <div className="text-sm text-blue-700">
                                                    Роботы индексируют готовый
                                                    HTML
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePage === "code" && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <Code className="w-12 h-12" />
                                            <div className="text-4xl font-black">
                                                Next.js пример
                                            </div>
                                        </div>
                                        <div className="bg-gray-900 text-gray-100 p-6 font-mono text-sm">
                                            <div className="text-blue-400">
                                                export default async function
                                            </div>
                                            <div className="text-yellow-300">
                                                Page()
                                            </div>
                                            <div>{"{"}</div>
                                            <div className="ml-4 text-purple-400">
                                                const data = await
                                            </div>
                                            <div className="ml-8 text-green-400">
                                                fetch('/api/posts');
                                            </div>
                                            <div className="ml-4 text-gray-400">
                                                // Рендер на сервере
                                            </div>
                                            <div className="ml-4">
                                                return &lt;Posts data={"{"}
                                                data{"}"} /&gt;;
                                            </div>
                                            <div>{"}"}</div>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Данные получены на сервере, HTML
                                            отдан клиенту готовым.
                                        </p>
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
