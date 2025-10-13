import { memo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const NextJsSection2 = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const features = [
        {
            title: "Файловый роутинг",
            subtitle: "Роутинг",
            description:
                "Структура папок автоматически становится роутами. Создаёте файл app/products/page.tsx — получаете страницу /products. Вложенные папки — вложенные маршруты. Лэйауты наследуются.",
            benefit:
                "Не нужно настраивать роутер вручную. Меньше конфигурации, больше времени на разработку.",
        },
        {
            title: "Автоматическая оптимизация",
            subtitle: "Производительность",
            description:
                "Next.js автоматически оптимизирует изображения, шрифты, скрипты. Изображения конвертируются в WebP, добавляется lazy loading. Шрифты встраиваются inline для быстрой загрузки.",
            benefit:
                "Отличные Core Web Vitals из коробки. Не нужно думать об оптимизации — она уже есть.",
        },
        {
            title: "React Server Components",
            subtitle: "RSC",
            description:
                "Компоненты рендерятся на сервере, не попадают в JS бандл клиента. Можно напрямую обращаться к базе данных. Меньше кода на клиенте = быстрее загрузка.",
            benefit:
                "Драматическое уменьшение размера бандла. Секретные ключи API остаются на сервере.",
        },
        {
            title: "Edge рендеринг и стриминг",
            subtitle: "Скорость",
            description:
                "Код выполняется на ближайшем к пользователю сервере Edge. Контент стримится по частям — пользователь видит страницу быстрее. Suspense boundaries для асинхронных компонентов.",
            benefit:
                "Минимальная задержка для пользователей по всему миру. Первый контент показывается мгновенно.",
        },
        {
            title: "Встроенная интернационализация",
            subtitle: "I18N",
            description:
                "Поддержка множества языков из коробки. Middleware для определения языка. Автоматический роутинг по локалям. /en/about, /ru/about работают автоматически.",
            benefit:
                "Глобальная аудитория без боли. SEO для каждого языка настраивается просто.",
        },
        {
            title: "API Routes",
            subtitle: "Backend в приложении",
            description:
                "Создавайте серверные эндпоинты прямо в Next.js приложении. Файл app/api/users/route.ts становится /api/users. Полноценный backend без отдельного сервера.",
            benefit:
                "Монорепозиторий для фронтенда и бэкенда. Типобезопасность на всём пути от API до UI.",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + features.length) % features.length
        );
    };

    return (
        <section className="h-screen flex items-center py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-5xl mx-auto w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
                            Next.js
                        </h2>
                        <p className="text-xl text-gray-600">
                            Возможности платформы
                        </p>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border-2 border-gray-300 p-12 h-[500px] flex flex-col justify-center"
                            >
                                <div className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">
                                    {features[currentSlide].subtitle}
                                </div>
                                <h3 className="text-5xl font-black mb-8">
                                    {features[currentSlide].title}
                                </h3>
                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    {features[currentSlide].description}
                                </p>
                                <div className="bg-gray-50 border-l-4 border-black p-6">
                                    <div className="text-sm font-bold mb-2">
                                        Зачем это нужно?
                                    </div>
                                    <p className="text-gray-700">
                                        {features[currentSlide].benefit}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {features.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-3 h-3 transition-colors ${
                                    currentSlide === idx
                                        ? "bg-black"
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
