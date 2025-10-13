import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import {
    Server,
    MonitorSmartphone,
    Plus,
    Minus,
    RefreshCw,
} from "lucide-react";

interface IUserData {
    name: string;
    age: number;
    role: string;
    active: boolean;
}

export const StateSection = memo(() => {
    const [userData, setUserData] = useState<IUserData>({
        name: "Александр",
        age: 28,
        role: "Frontend Developer",
        active: true,
    });

    const incrementAge = () => {
        setUserData((prev) => ({ ...prev, age: prev.age + 1 }));
    };

    const decrementAge = () => {
        setUserData((prev) => ({ ...prev, age: Math.max(18, prev.age - 1) }));
    };

    const toggleActive = () => {
        setUserData((prev) => ({ ...prev, active: !prev.active }));
    };

    const changeName = (name: string) => {
        setUserData((prev) => ({ ...prev, name }));
    };

    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-12 leading-none">
                            State Management
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-16">
                            Управление состоянием — это про реактивность данных
                            и архитектуру приложения.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                        <FadeIn delay={0.3}>
                            <div className="bg-gray-50 p-4 sm:p-8 border border-gray-200">
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <MonitorSmartphone className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        Интерактивное состояние
                                    </h3>
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                                            Имя
                                        </label>
                                        <input
                                            type="text"
                                            value={userData.name}
                                            onChange={(e) =>
                                                changeName(e.target.value)
                                            }
                                            className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border-2 border-gray-300 focus:border-black focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                                            Возраст: {userData.age}
                                        </label>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={decrementAge}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 transition-colors"
                                            >
                                                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </button>
                                            <button
                                                onClick={incrementAge}
                                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 transition-colors"
                                            >
                                                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={toggleActive}
                                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${
                                                userData.active
                                                    ? "bg-green-500 text-white hover:bg-green-600"
                                                    : "bg-red-500 text-white hover:bg-red-600"
                                            }`}
                                        >
                                            {userData.active
                                                ? "Активен"
                                                : "Неактивен"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <Server className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        JSON State
                                    </h3>
                                </div>

                                <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-auto max-h-[250px] sm:max-h-[400px]">
                                    <pre>
                                        {JSON.stringify(userData, null, 2)}
                                    </pre>
                                </div>

                                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                        <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>
                                            Изменения отражаются в реальном
                                            времени
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
