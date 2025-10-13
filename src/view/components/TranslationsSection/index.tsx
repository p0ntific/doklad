import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Globe } from "lucide-react";

interface ITranslations {
    [key: string]: {
        title: string;
        subtitle: string;
        description: string;
        features: {
            interpolation: string;
            formatting: string;
            typeScript: string;
            performance: string;
        };
    };
}

export const TranslationsSection = memo(() => {
    const [selectedLang, setSelectedLang] = useState("ru");

    const translations: ITranslations = {
        ru: {
            title: "Переводы",
            subtitle: "next-intl для Next.js",
            description:
                "Поддержка множества языков без усложнения кода. Типобезопасные переводы с полным контролем.",
            features: {
                interpolation:
                    "ICU синтаксис для интерполяции, плюрализации и выбора по enum",
                formatting:
                    "Форматирование дат, времени, чисел и валют через Intl API",
                typeScript:
                    "Автокомплит ключей переводов и проверка типов на этапе компиляции",
                performance:
                    "Ленивая загрузка языков. Tree-shaking неиспользуемых переводов",
            },
        },
        en: {
            title: "Translations",
            subtitle: "next-intl for Next.js",
            description:
                "Support multiple languages without code complexity. Type-safe translations with full control.",
            features: {
                interpolation:
                    "ICU syntax for interpolation, pluralization and enum-based selection",
                formatting:
                    "Format dates, times, numbers and currencies via Intl API",
                typeScript:
                    "Autocomplete for translation keys and compile-time type checking",
                performance:
                    "Lazy load languages. Tree-shake unused translations",
            },
        },
        es: {
            title: "Traducciones",
            subtitle: "next-intl para Next.js",
            description:
                "Admite múltiples idiomas sin complejidad de código. Traducciones con seguridad de tipos.",
            features: {
                interpolation:
                    "Sintaxis ICU para interpolación, pluralización y selección basada en enum",
                formatting:
                    "Formatear fechas, horas, números y monedas a través de Intl API",
                typeScript:
                    "Autocompletado de claves de traducción y verificación de tipos",
                performance:
                    "Carga diferida de idiomas. Tree-shaking de traducciones no utilizadas",
            },
        },
        de: {
            title: "Übersetzungen",
            subtitle: "next-intl für Next.js",
            description:
                "Unterstützt mehrere Sprachen ohne Code-Komplexität. Typsichere Übersetzungen.",
            features: {
                interpolation:
                    "ICU-Syntax für Interpolation, Pluralisierung und enum-basierte Auswahl",
                formatting:
                    "Formatierung von Datum, Zeit, Zahlen und Währungen über Intl API",
                typeScript:
                    "Autovervollständigung für Übersetzungsschlüssel und Typprüfung",
                performance:
                    "Lazy Loading von Sprachen. Tree-Shaking ungenutzter Übersetzungen",
            },
        },
        fr: {
            title: "Traductions",
            subtitle: "next-intl pour Next.js",
            description:
                "Prend en charge plusieurs langues sans complexité du code. Traductions type-safe.",
            features: {
                interpolation:
                    "Syntaxe ICU pour l'interpolation, la pluralisation et la sélection",
                formatting:
                    "Formatage des dates, heures, nombres et devises via Intl API",
                typeScript:
                    "Autocomplétion des clés de traduction et vérification des types",
                performance:
                    "Chargement différé des langues. Tree-shaking des traductions",
            },
        },
        it: {
            title: "Traduzioni",
            subtitle: "next-intl per Next.js",
            description:
                "Supporta più lingue senza complessità del codice. Traduzioni type-safe.",
            features: {
                interpolation:
                    "Sintassi ICU per interpolazione, pluralizzazione e selezione",
                formatting:
                    "Formattazione di date, orari, numeri e valute tramite Intl API",
                typeScript:
                    "Autocompletamento delle chiavi di traduzione e controllo dei tipi",
                performance:
                    "Caricamento lazy delle lingue. Tree-shaking delle traduzioni",
            },
        },
        pt: {
            title: "Traduções",
            subtitle: "next-intl para Next.js",
            description:
                "Suporta vários idiomas sem complexidade de código. Traduções com segurança de tipo.",
            features: {
                interpolation:
                    "Sintaxe ICU para interpolação, pluralização e seleção baseada em enum",
                formatting:
                    "Formatação de datas, horas, números e moedas via Intl API",
                typeScript:
                    "Autocompletar chaves de tradução e verificação de tipos",
                performance:
                    "Carregamento preguiçoso de idiomas. Tree-shaking de traduções",
            },
        },
        ja: {
            title: "翻訳",
            subtitle: "Next.js用next-intl",
            description:
                "コードを複雑にすることなく複数の言語をサポート。型安全な翻訳。",
            features: {
                interpolation:
                    "補間、複数形化、enum ベースの選択のためのICU構文",
                formatting:
                    "Intl APIを介した日付、時刻、数値、通貨のフォーマット",
                typeScript:
                    "翻訳キーのオートコンプリートとコンパイル時の型チェック",
                performance: "言語の遅延読み込み。未使用の翻訳のTree-shaking",
            },
        },
        zh: {
            title: "翻译",
            subtitle: "Next.js的next-intl",
            description: "支持多种语言而不增加代码复杂性。类型安全翻译。",
            features: {
                interpolation: "用于插值、复数和基于枚举选择的ICU语法",
                formatting: "通过Intl API格式化日期、时间、数字和货币",
                typeScript: "翻译键的自动完成和编译时类型检查",
                performance: "语言的延迟加载。未使用翻译的Tree-shaking",
            },
        },
        ko: {
            title: "번역",
            subtitle: "Next.js용 next-intl",
            description:
                "코드 복잡성 없이 여러 언어를 지원합니다. 타입 안전 번역.",
            features: {
                interpolation:
                    "보간, 복수형 및 열거형 기반 선택을 위한 ICU 구문",
                formatting:
                    "Intl API를 통한 날짜, 시간, 숫자 및 통화 형식 지정",
                typeScript: "번역 키 자동 완성 및 컴파일 시 타입 검사",
                performance:
                    "지연 로딩 언어. 사용하지 않는 번역의 Tree-shaking",
            },
        },
        ar: {
            title: "الترجمات",
            subtitle: "next-intl لـ Next.js",
            description:
                "دعم لغات متعددة دون تعقيد الكود. ترجمات آمنة من حيث النوع.",
            features: {
                interpolation: "بناء جملة ICU للإدخال والجمع والاختيار",
                formatting:
                    "تنسيق التواريخ والأوقات والأرقام والعملات عبر Intl API",
                typeScript: "الإكمال التلقائي لمفاتيح الترجمة",
                performance: "التحميل الكسول للغات. Tree-shaking للترجمات",
            },
        },
    };

    const currentTranslation = translations[selectedLang];

    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-12 gap-4">
                        <FadeIn>
                            <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                                Практики • I18n
                            </div>
                        </FadeIn>
                        <div className="relative w-full sm:w-auto">
                            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-4 flex items-center pointer-events-none">
                                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                            </div>
                            <select
                                value={selectedLang}
                                onChange={(e) =>
                                    setSelectedLang(e.target.value)
                                }
                                className="w-full sm:w-auto pl-8 sm:pl-12 pr-8 sm:pr-10 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 bg-white font-semibold focus:outline-none focus:border-black hover:border-gray-400 transition-colors appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right 0.75rem center",
                                }}
                            >
                                <option value="ru">🇷🇺 Русский</option>
                                <option value="en">🇬🇧 English</option>
                                <option value="es">🇪🇸 Español</option>
                                <option value="de">🇩🇪 Deutsch</option>
                                <option value="fr">🇫🇷 Français</option>
                                <option value="it">🇮🇹 Italiano</option>
                                <option value="pt">🇵🇹 Português</option>
                                <option value="ja">🇯🇵 日本語</option>
                                <option value="zh">🇨🇳 中文</option>
                                <option value="ko">🇰🇷 한국어</option>
                                <option value="ar">🇸🇦 العربية</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black mb-6 sm:mb-12 leading-none">
                            {currentTranslation.title}
                        </h2>

                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed mb-3 sm:mb-4 font-light">
                            {currentTranslation.subtitle}
                        </p>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-12">
                            {currentTranslation.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gray-50 p-4 sm:p-6 border border-gray-200">
                                <div className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                                    Interpolation
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">
                                    {currentTranslation.features.interpolation}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 sm:p-6 border border-gray-200">
                                <div className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                                    Formatting
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">
                                    {currentTranslation.features.formatting}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 sm:p-6 border border-gray-200">
                                <div className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                                    TypeScript
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">
                                    {currentTranslation.features.typeScript}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 sm:p-6 border border-gray-200">
                                <div className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                                    Performance
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">
                                    {currentTranslation.features.performance}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
