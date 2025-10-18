import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Monitor, Folder, File, X, Minimize2, Maximize2 } from "lucide-react";

interface ITab {
    id: string;
    name: string;
    content: React.ReactNode;
}

export const HtmlEraSection = memo(() => {
    const [activeTab, setActiveTab] = useState("html");
    const [openFolders, setOpenFolders] = useState<string[]>(["docs"]);

    const toggleFolder = (folderId: string) => {
        setOpenFolders((prev) =>
            prev.includes(folderId)
                ? prev.filter((id) => id !== folderId)
                : [...prev, folderId]
        );
    };

    const tabs: ITab[] = [
        {
            id: "html",
            name: "index.html",
            content: (
                <div className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        HTML
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                        Полотно тегов для структуры контента
                    </p>
                    <div className="bg-gray-50 p-3 sm:p-4 border border-gray-300 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="text-gray-600">
                            &lt;!DOCTYPE html&gt;
                        </div>
                        <div className="text-gray-600">&lt;html&gt;</div>
                        <div className="ml-4 text-gray-600">&lt;head&gt;</div>
                        <div className="ml-8 text-gray-600">
                            &lt;title&gt;Сайт&lt;/title&gt;
                        </div>
                        <div className="ml-4 text-gray-600">&lt;/head&gt;</div>
                        <div className="ml-4 text-gray-600">&lt;body&gt;</div>
                        <div className="ml-8 text-gray-600">
                            &lt;h1&gt;Привет мир&lt;/h1&gt;
                        </div>
                        <div className="ml-4 text-gray-600">&lt;/body&gt;</div>
                        <div className="text-gray-600">&lt;/html&gt;</div>
                    </div>
                </div>
            ),
        },
        {
            id: "css",
            name: "styles.css",
            content: (
                <div className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        CSS
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                        Стили для визуального оформления
                    </p>
                    <div className="bg-gray-50 p-3 sm:p-4 border border-gray-300 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="text-gray-600">body {"{"}</div>
                        <div className="ml-4 text-gray-600">
                            background: #ffffff;
                        </div>
                        <div className="ml-4 text-gray-600">
                            color: #000000;
                        </div>
                        <div className="ml-4 text-gray-600">
                            font-family: Arial;
                        </div>
                        <div className="text-gray-600">{"}"}</div>
                    </div>
                </div>
            ),
        },
        {
            id: "js",
            name: "script.js",
            content: (
                <div className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                        JavaScript
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                        Скрипты для базовой интерактивности
                    </p>
                    <div className="bg-gray-50 p-3 sm:p-4 border border-gray-300 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="text-gray-600">
                            document.querySelector('button')
                        </div>
                        <div className="ml-4 text-gray-600">
                            .addEventListener('click', () =&gt; {"{"}
                        </div>
                        <div className="ml-8 text-gray-600">
                            alert('Hello!');
                        </div>
                        <div className="ml-4 text-gray-600">{"}"})</div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="h-screen flex items-center py-8 sm:py-16 relative bg-[#5a7fa0] snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase opacity-80">
                            Эра 1 • 1990-2010
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-[#ece9d8] border-t-[3px] border-l-[3px] border-r-[3px] border-b-[3px] border-t-[#0054e3] border-l-[#0054e3] border-r-[#0054e3] border-b-[#0054e3] shadow-2xl">
                            <div className="bg-gradient-to-r from-[#0054e3] to-[#3985ec] px-2 sm:px-4 py-2 flex justify-between items-center">
                                <div className="flex items-center gap-1 sm:gap-2 text-white font-bold text-xs sm:text-sm">
                                    <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline">
                                        Начало пути - Internet Explorer
                                    </span>
                                    <span className="sm:hidden">IE</span>
                                </div>
                                <div className="flex gap-0.5 sm:gap-1">
                                    <button className="w-5 h-5 sm:w-7 sm:h-7 bg-[#3985ec] hover:bg-[#5199ee] border border-[#2a6bc7] flex items-center justify-center">
                                        <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </button>
                                    <button className="w-5 h-5 sm:w-7 sm:h-7 bg-[#3985ec] hover:bg-[#5199ee] border border-[#2a6bc7] flex items-center justify-center">
                                        <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </button>
                                    <button className="w-5 h-5 sm:w-7 sm:h-7 bg-[#e81224] hover:bg-[#f03444] border border-[#c00010] flex items-center justify-center">
                                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-[#ece9d8] p-1 sm:p-2 border-b border-[#cadae9]">
                                <div className="flex gap-0.5 sm:gap-1 overflow-x-auto">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-2 sm:px-4 py-1 sm:py-2 border border-[#8a9bb0] flex items-center gap-1 sm:gap-2 transition-colors whitespace-nowrap ${
                                                activeTab === tab.id
                                                    ? "bg-white border-b-white"
                                                    : "bg-[#d4d0c8] hover:bg-[#e4e0d8]"
                                            }`}
                                        >
                                            <File className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span className="text-xs sm:text-sm font-medium">
                                                {tab.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 bg-white">
                                <div className="hidden sm:block col-span-1 bg-white border-r border-gray-300 p-4 h-[400px] overflow-y-auto">
                                    <div className="text-xs font-bold mb-3 text-gray-700">
                                        Структура проекта
                                    </div>
                                    <div
                                        className="flex items-center gap-2 py-1 cursor-pointer hover:bg-[#e5f3ff]"
                                        onClick={() => toggleFolder("docs")}
                                    >
                                        <Folder
                                            className={`w-4 h-4 ${
                                                openFolders.includes("docs")
                                                    ? "text-blue-600"
                                                    : "text-yellow-600"
                                            }`}
                                        />
                                        <span className="text-sm">
                                            {openFolders.includes("docs")
                                                ? "▼"
                                                : "►"}{" "}
                                            Website
                                        </span>
                                    </div>
                                    {openFolders.includes("docs") && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            <div
                                                className={`flex items-center gap-2 py-1 cursor-pointer hover:bg-[#e5f3ff] ${
                                                    activeTab === "html"
                                                        ? "bg-[#e5f3ff]"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setActiveTab("html")
                                                }
                                            >
                                                <File className="w-4 h-4 text-gray-600" />
                                                <span className="text-sm">
                                                    index.html
                                                </span>
                                            </div>
                                            <div
                                                className={`flex items-center gap-2 py-1 cursor-pointer hover:bg-[#e5f3ff] ${
                                                    activeTab === "css"
                                                        ? "bg-[#e5f3ff]"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setActiveTab("css")
                                                }
                                            >
                                                <File className="w-4 h-4 text-gray-600" />
                                                <span className="text-sm">
                                                    styles.css
                                                </span>
                                            </div>
                                            <div
                                                className={`flex items-center gap-2 py-1 cursor-pointer hover:bg-[#e5f3ff] ${
                                                    activeTab === "js"
                                                        ? "bg-[#e5f3ff]"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setActiveTab("js")
                                                }
                                            >
                                                <File className="w-4 h-4 text-gray-600" />
                                                <span className="text-sm">
                                                    script.js
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-1 sm:col-span-3 bg-white">
                                    {
                                        tabs.find((tab) => tab.id === activeTab)
                                            ?.content
                                    }
                                </div>
                            </div>

                            <div className="bg-[#ece9d8] p-2 border-t border-[#8a9bb0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-[10px] sm:text-xs w-full sm:w-auto">
                                    <div className="border-l-4 border-black pl-2">
                                        <span className="font-bold">Плюс:</span>{" "}
                                        Простота и предсказуемость
                                    </div>
                                    <div className="border-l-4 border-gray-400 pl-2">
                                        <span className="font-bold">
                                            Минус:
                                        </span>{" "}
                                        Дублирование, сложное масштабирование
                                    </div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-600">
                                    Готово
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
});
