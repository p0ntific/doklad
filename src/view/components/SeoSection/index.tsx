import { memo, useState } from "react";
import { Target, Link2, Search, Code, ArrowRight } from "lucide-react";

export const SeoSection = memo(() => {
    const [activeTab, setActiveTab] = useState<
        "meta" | "robots" | "redirects" | "jsonld"
    >("meta");

    return (
        <section className="h-screen flex items-center py-8 sm:py-16 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="mb-4 sm:mb-8">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none">
                            SEO
                        </h2>
                        <p className="text-base sm:text-xl md:text-2xl text-gray-600 mt-2 sm:mt-4">
                            Детали для индексации и ранжирования
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <button
                            onClick={() => setActiveTab("meta")}
                            className={`p-3 sm:p-6 border-2 transition-all text-left ${
                                activeTab === "meta"
                                    ? "border-black bg-white"
                                    : "border-gray-300 bg-gray-50 hover:border-gray-400"
                            }`}
                        >
                            <Target className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                            <div className="font-bold text-sm sm:text-base">Мета-теги</div>
                        </button>
                        <button
                            onClick={() => setActiveTab("robots")}
                            className={`p-3 sm:p-6 border-2 transition-all text-left ${
                                activeTab === "robots"
                                    ? "border-black bg-white"
                                    : "border-gray-300 bg-gray-50 hover:border-gray-400"
                            }`}
                        >
                            <Search className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                            <div className="font-bold text-sm sm:text-base">Robots</div>
                        </button>
                        <button
                            onClick={() => setActiveTab("redirects")}
                            className={`p-3 sm:p-6 border-2 transition-all text-left ${
                                activeTab === "redirects"
                                    ? "border-black bg-white"
                                    : "border-gray-300 bg-gray-50 hover:border-gray-400"
                            }`}
                        >
                            <Link2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                            <div className="font-bold text-sm sm:text-base">Маски</div>
                        </button>
                        <button
                            onClick={() => setActiveTab("jsonld")}
                            className={`p-3 sm:p-6 border-2 transition-all text-left ${
                                activeTab === "jsonld"
                                    ? "border-black bg-white"
                                    : "border-gray-300 bg-gray-50 hover:border-gray-400"
                            }`}
                        >
                            <Code className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                            <div className="font-bold text-sm sm:text-base">JSON-LD</div>
                        </button>
                    </div>

                    <div className="bg-white border-2 border-gray-300 p-4 sm:p-8 h-[300px] sm:h-[420px] overflow-auto">
                        {activeTab === "meta" && (
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">
                                    Мета-теги для поисковых систем и соцсетей
                                </h3>

                                <div className="space-y-4 mb-4 sm:mb-6">
                                    <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs overflow-x-auto">
                                        <div className="text-gray-400 mb-2">
                                            {"// Базовые мета-теги"}
                                        </div>
                                        <div className="text-blue-400">
                                            &lt;head&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;title&gt;Название
                                            страницы&lt;/title&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "description"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "Описание для поисковиков"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "keywords"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "ключевые, слова"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;link rel=
                                            <span className="text-green-400">
                                                "canonical"
                                            </span>{" "}
                                            href=
                                            <span className="text-green-400">
                                                "https://example.com/page"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="text-blue-400 mt-2">
                                            &lt;/head&gt;
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs overflow-x-auto">
                                        <div className="text-gray-400 mb-2">
                                            {
                                                "// Open Graph (Facebook, LinkedIn)"
                                            }
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta property=
                                            <span className="text-green-400">
                                                "og:title"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "Заголовок"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta property=
                                            <span className="text-green-400">
                                                "og:description"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "Описание"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta property=
                                            <span className="text-green-400">
                                                "og:image"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "https://example.com/og.jpg"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta property=
                                            <span className="text-green-400">
                                                "og:url"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "https://example.com"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta property=
                                            <span className="text-green-400">
                                                "og:type"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "website"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs overflow-x-auto">
                                        <div className="text-gray-400 mb-2">
                                            {"// Twitter Cards"}
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "twitter:card"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "summary_large_image"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "twitter:title"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "Заголовок"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "twitter:description"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "Описание"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                        <div className="ml-4">
                                            &lt;meta name=
                                            <span className="text-green-400">
                                                "twitter:image"
                                            </span>{" "}
                                            content=
                                            <span className="text-green-400">
                                                "https://example.com/twitter.jpg"
                                            </span>{" "}
                                            /&gt;
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-700">
                                        <strong>Зачем это нужно:</strong>{" "}
                                        Мета-теги контролируют как ваш сайт
                                        отображается в поисковиках и при репосте
                                        в соцсетях. Open Graph используется
                                        Facebook, LinkedIn, Telegram. Twitter
                                        Cards - для Twitter. Canonical помогает
                                        избежать дублирования контента.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "robots" && (
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">
                                    robots.txt & sitemap.xml - Управление
                                    индексацией
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    <div>
                                        <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs mb-3 overflow-x-auto">
                                            <div className="text-green-400 mb-2">
                                                # robots.txt
                                            </div>
                                            <div>User-agent: *</div>
                                            <div>Allow: /</div>
                                            <div className="mt-2">
                                                Disallow: /admin/
                                            </div>
                                            <div>Disallow: /api/</div>
                                            <div>Disallow: /private/</div>
                                            <div className="mt-2">
                                                Sitemap:
                                                https://example.com/sitemap.xml
                                            </div>
                                            <div className="mt-2 text-gray-400">
                                                # Специальные правила для Google
                                            </div>
                                            <div>User-agent: Googlebot</div>
                                            <div>Crawl-delay: 1</div>
                                        </div>
                                        <div className="text-[10px] sm:text-xs text-gray-600 bg-gray-50 p-2 sm:p-3 border border-gray-200">
                                            <strong>robots.txt</strong>{" "}
                                            указывает поисковым роботам, какие
                                            страницы индексировать, а какие -
                                            нет. Помещается в корень сайта.
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs mb-3 overflow-x-auto">
                                            <div className="text-green-400 mb-2">
                                                # sitemap.xml
                                            </div>
                                            <div className="text-blue-400">
                                                &lt;urlset xmlns=
                                                <span className="text-green-400">
                                                    "..."
                                                </span>
                                                &gt;
                                            </div>
                                            <div className="ml-2">
                                                &lt;url&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;loc&gt;https://example.com/&lt;/loc&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;lastmod&gt;2024-01-01&lt;/lastmod&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;changefreq&gt;daily&lt;/changefreq&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;priority&gt;1.0&lt;/priority&gt;
                                            </div>
                                            <div className="ml-2">
                                                &lt;/url&gt;
                                            </div>
                                            <div className="ml-2">
                                                &lt;url&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;loc&gt;https://example.com/blog&lt;/loc&gt;
                                            </div>
                                            <div className="ml-4">
                                                &lt;priority&gt;0.8&lt;/priority&gt;
                                            </div>
                                            <div className="ml-2">
                                                &lt;/url&gt;
                                            </div>
                                            <div className="text-blue-400">
                                                &lt;/urlset&gt;
                                            </div>
                                        </div>
                                        <div className="text-[10px] sm:text-xs text-gray-600 bg-gray-50 p-2 sm:p-3 border border-gray-200">
                                            <strong>sitemap.xml</strong> - карта
                                            сайта со всеми важными URL. Помогает
                                            поисковикам быстрее найти и
                                            проиндексировать страницы.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-700">
                                        <strong>Важно:</strong> robots.txt не
                                        защищает от индексации на 100%.
                                        Используйте meta robots="noindex" для
                                        гарантированной защиты. Регулярно
                                        обновляйте sitemap.xml при добавлении
                                        новых страниц.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "redirects" && (
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">
                                    Маскирование URL и редиректы
                                </h3>

                                <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                                            URL Rewriting (Маскирование)
                                        </h4>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-3">
                                            <div className="flex-1 bg-green-50 p-3 sm:p-4 border-2 border-green-300">
                                                <div className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                                    ✓ SEO-friendly URL:
                                                </div>
                                                <code className="text-xs sm:text-sm md:text-base font-mono font-bold break-all">
                                                    /products/laptops/macbook-pro
                                                </code>
                                            </div>
                                            <ArrowRight className="w-6 h-6 text-gray-400 self-center hidden sm:block" />
                                            <div className="flex-1 bg-gray-50 p-3 sm:p-4 border border-gray-300">
                                                <div className="text-[10px] sm:text-xs text-gray-500 mb-1">
                                                    Внутренний путь:
                                                </div>
                                                <code className="text-xs sm:text-sm font-mono text-gray-600 break-all">
                                                    /catalog?cat=laptops&id=123
                                                </code>
                                            </div>
                                        </div>
                                        <div className="bg-gray-900 text-gray-100 p-3 sm:p-4 font-mono text-[10px] sm:text-xs overflow-x-auto">
                                            <div className="text-gray-400">
                                                {"// Next.js rewrites"}
                                            </div>
                                            <div>{"{"}</div>
                                            <div className="ml-4">
                                                source:{" "}
                                                <span className="text-green-400">
                                                    '/products/:category/:slug'
                                                </span>
                                                ,
                                            </div>
                                            <div className="ml-4">
                                                destination:{" "}
                                                <span className="text-green-400">
                                                    '/api/product?category=:category&slug=:slug'
                                                </span>
                                            </div>
                                            <div>{"}"}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">
                                            Редиректы (301 vs 302)
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3">
                                            <div className="bg-blue-50 border-2 border-blue-300 p-3 sm:p-4">
                                                <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                                                    301 - Постоянный
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-700">
                                                    Для переехавших страниц.
                                                    Передаёт вес страницы в SEO.
                                                </div>
                                            </div>
                                            <div className="bg-purple-50 border-2 border-purple-300 p-3 sm:p-4">
                                                <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                                                    302 - Временный
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-700">
                                                    Для A/B тестов, временных
                                                    акций. Не передаёт SEO вес.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-900 text-gray-100 p-3 sm:p-4 font-mono text-[10px] sm:text-xs overflow-x-auto">
                                            <div className="text-gray-400">
                                                {"// Конфигурация редиректов"}
                                            </div>
                                            <div>{"["}</div>
                                            <div className="ml-4">{"{"}</div>
                                            <div className="ml-8">
                                                source:{" "}
                                                <span className="text-green-400">
                                                    '/old-blog/:slug'
                                                </span>
                                                ,
                                            </div>
                                            <div className="ml-8">
                                                destination:{" "}
                                                <span className="text-green-400">
                                                    '/blog/:slug'
                                                </span>
                                                ,
                                            </div>
                                            <div className="ml-8">
                                                permanent:{" "}
                                                <span className="text-orange-400">
                                                    true
                                                </span>{" "}
                                                <span className="text-gray-400">
                                                    // 301
                                                </span>
                                            </div>
                                            <div className="ml-4">{"},"}</div>
                                            <div className="ml-4">{"{"}</div>
                                            <div className="ml-8">
                                                source:{" "}
                                                <span className="text-green-400">
                                                    '/promo'
                                                </span>
                                                ,
                                            </div>
                                            <div className="ml-8">
                                                destination:{" "}
                                                <span className="text-green-400">
                                                    '/sale'
                                                </span>
                                                ,
                                            </div>
                                            <div className="ml-8">
                                                permanent:{" "}
                                                <span className="text-orange-400">
                                                    false
                                                </span>{" "}
                                                <span className="text-gray-400">
                                                    // 302
                                                </span>
                                            </div>
                                            <div className="ml-4">{"}"}</div>
                                            <div>{"]"}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-700">
                                        <strong>SEO эффект:</strong> ЧПУ
                                        (человекопонятные URL) улучшают CTR в
                                        поиске на 25-30%. Правильные 301
                                        редиректы сохраняют до 99% SEO веса при
                                        переезде страниц.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "jsonld" && (
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6">
                                    Структурированные данные JSON-LD
                                </h3>
                                <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm overflow-auto">
                                    <div className="text-blue-400">
                                        &lt;script type=
                                        <span className="text-green-400">
                                            "application/ld+json"
                                        </span>
                                        &gt;
                                    </div>
                                    <div className="ml-2">{"{"}</div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "@context"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "https://schema.org"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "@type"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "WebSite"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "name"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "My Website"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "url"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "https://example.com"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "description"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "Website description"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-4">
                                        <span className="text-orange-400">
                                            "potentialAction"
                                        </span>
                                        : {"{"}
                                    </div>
                                    <div className="ml-6">
                                        <span className="text-orange-400">
                                            "@type"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "SearchAction"
                                        </span>
                                        ,
                                    </div>
                                    <div className="ml-6">
                                        <span className="text-orange-400">
                                            "target"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "https://example.com/search?q={"{"}
                                        </span>
                                    </div>
                                    <div className="ml-6">
                                        <span className="text-orange-400">
                                            "query-input"
                                        </span>
                                        :{" "}
                                        <span className="text-green-400">
                                            "required name=search_term_string"
                                        </span>
                                    </div>
                                    <div className="ml-4">{"}"}</div>
                                    <div className="ml-2">{"}"}</div>
                                    <div className="text-blue-400">
                                        &lt;/script&gt;
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
                                    JSON-LD помогает поисковым системам понять
                                    содержимое страницы и отображать расширенные
                                    результаты поиска (rich snippets)
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
});
