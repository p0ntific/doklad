import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Check, X, Search, Bell, User } from "lucide-react";

export const UiKitExamplesSection = memo(() => {
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <section className="h-screen flex items-center py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Примеры • Компоненты
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            UI Компоненты
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Живые примеры компонентов из Hero UI. Попробуйте
                            взаимодействовать.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6">
                                    Кнопки
                                </h3>
                                <div className="space-y-4">
                                    <button className="w-full px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors">
                                        Primary Button
                                    </button>
                                    <button className="w-full px-6 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors">
                                        Secondary Button
                                    </button>
                                    <button className="w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold hover:bg-gray-200 transition-colors">
                                        Tertiary Button
                                    </button>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="bg-white p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6">
                                    Формы
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Input Field
                                        </label>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) =>
                                                    setInputValue(
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Поиск..."
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <div
                                                onClick={() =>
                                                    setIsChecked(!isChecked)
                                                }
                                                className={`w-6 h-6 border-2 border-black flex items-center justify-center transition-colors ${
                                                    isChecked
                                                        ? "bg-black"
                                                        : "bg-white"
                                                }`}
                                            >
                                                {isChecked && (
                                                    <Check className="w-4 h-4 text-white" />
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
                            <div className="bg-white p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6">
                                    Иконки
                                </h3>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors">
                                        <Bell className="w-8 h-8" />
                                        <span className="text-xs">Bell</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors">
                                        <User className="w-8 h-8" />
                                        <span className="text-xs">User</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors">
                                        <Search className="w-8 h-8" />
                                        <span className="text-xs">Search</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 transition-colors">
                                        <Check className="w-8 h-8" />
                                        <span className="text-xs">Check</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.8}>
                            <div className="bg-white p-8 border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6">
                                    Уведомления
                                </h3>
                                <div className="space-y-3">
                                    <div className="p-4 bg-green-50 border-l-4 border-green-500">
                                        <div className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-semibold text-green-900">
                                                    Успешно
                                                </div>
                                                <div className="text-sm text-green-700">
                                                    Операция выполнена
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-red-50 border-l-4 border-red-500">
                                        <div className="flex items-start gap-3">
                                            <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-semibold text-red-900">
                                                    Ошибка
                                                </div>
                                                <div className="text-sm text-red-700">
                                                    Что-то пошло не так
                                                </div>
                                            </div>
                                        </div>
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
