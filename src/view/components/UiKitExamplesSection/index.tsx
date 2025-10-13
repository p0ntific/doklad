import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Check, Search, Bell, User } from "lucide-react";

export const UiKitExamplesSection = memo(() => {
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Примеры • Компоненты
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-12 leading-none">
                            UI Компоненты
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-16">
                            Живые примеры компонентов из Hero UI. Попробуйте
                            взаимодействовать.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    Кнопки
                                </h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors">
                                        Primary Button
                                    </button>
                                    <button className="w-full px-4 sm:px-6 py-2 sm:py-3 border-2 border-black text-black text-sm sm:text-base font-semibold hover:bg-black hover:text-white transition-colors">
                                        Secondary Button
                                    </button>
                                    <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold hover:bg-gray-200 transition-colors">
                                        Tertiary Button
                                    </button>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    Формы
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Input Field
                                        </label>
                                        <div className="relative">
                                            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) =>
                                                    setInputValue(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Поиск..."
                                                className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                                            <div
                                                onClick={() =>
                                                    setIsChecked(!isChecked)
                                                }
                                                className={`w-5 h-5 sm:w-6 sm:h-6 border-2 border-black flex items-center justify-center transition-colors ${
                                                    isChecked
                                                        ? "bg-black"
                                                        : "bg-white"
                                                }`}
                                            >
                                                {isChecked && (
                                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium">
                                                Принимаю условия
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.7}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    Иконки
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 hover:bg-gray-50 transition-colors">
                                        <Bell className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <span className="text-[10px] sm:text-xs">
                                            Bell
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 hover:bg-gray-50 transition-colors">
                                        <User className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <span className="text-[10px] sm:text-xs">
                                            User
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 hover:bg-gray-50 transition-colors">
                                        <Search className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <span className="text-[10px] sm:text-xs">
                                            Search
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 hover:bg-gray-50 transition-colors">
                                        <Check className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <span className="text-[10px] sm:text-xs">
                                            Check
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
});
