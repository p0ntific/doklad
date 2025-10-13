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
        <section className="h-screen flex items-center py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <h2 className="text-6xl md:text-8xl font-black mb-12 leading-none">
                            State Management
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Управление состоянием — это про реактивность данных
                            и архитектуру приложения.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <FadeIn delay={0.3}>
                            <div className="bg-gray-50 p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <MonitorSmartphone className="w-8 h-8" />
                                    <h3 className="text-3xl font-bold">
                                        Интерактивное состояние
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Имя
                                        </label>
                                        <input
                                            type="text"
                                            value={userData.name}
                                            onChange={(e) =>
                                                changeName(e.target.value)
                                            }
                                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-black focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Возраст: {userData.age}
                                        </label>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={decrementAge}
                                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={incrementAge}
                                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={toggleActive}
                                            className={`w-full px-4 py-3 font-semibold transition-colors ${
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
                            <div className="bg-white p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <Server className="w-8 h-8" />
                                    <h3 className="text-3xl font-bold">
                                        JSON State
                                    </h3>
                                </div>

                                <div className="bg-gray-900 text-gray-100 p-6 font-mono text-sm overflow-auto max-h-[400px]">
                                    <pre>
                                        {JSON.stringify(userData, null, 2)}
                                    </pre>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <RefreshCw className="w-4 h-4" />
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
