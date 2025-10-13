import { memo, useState } from "react";
import { Database, Send, Edit, Trash2, Download, Code } from "lucide-react";

export const BackendSection2 = memo(() => {
    const [selectedMethod, setSelectedMethod] = useState<
        "GET" | "POST" | "PUT" | "DELETE"
    >("GET");

    const methodData = {
        GET: {
            icon: <Download className="w-12 h-12 mb-4" />,
            color: "border-blue-500",
            bgColor: "bg-blue-50",
            title: "GET",
            description: "Получение данных с сервера без изменений",
            code: `const response = await fetch('/api/users/123');
const user = await response.json();`,
            examples: [
                "Список продуктов",
                "Профиль пользователя",
                "Результаты поиска",
                "Данные дашборда",
            ],
        },
        POST: {
            icon: <Send className="w-12 h-12 mb-4" />,
            color: "border-green-500",
            bgColor: "bg-green-50",
            title: "POST",
            description: "Создание нового ресурса на сервере",
            code: `const response = await fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({ name: 'Ivan' })
});`,
            examples: [
                "Регистрация пользователя",
                "Создание поста",
                "Оформление заказа",
                "Загрузка файла",
            ],
        },
        PUT: {
            icon: <Edit className="w-12 h-12 mb-4" />,
            color: "border-orange-500",
            bgColor: "bg-orange-50",
            title: "PUT",
            description: "Полное обновление существующего ресурса",
            code: `const response = await fetch('/api/users/123', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Ivan Updated' })
});`,
            examples: [
                "Редактирование профиля",
                "Обновление настроек",
                "Изменение статуса",
                "Замена документа",
            ],
        },
        DELETE: {
            icon: <Trash2 className="w-12 h-12 mb-4" />,
            color: "border-red-500",
            bgColor: "bg-red-50",
            title: "DELETE",
            description: "Удаление ресурса с сервера",
            code: `const response = await fetch('/api/users/123', {
  method: 'DELETE'
});`,
            examples: [
                "Удаление аккаунта",
                "Очистка корзины",
                "Удаление комментария",
                "Отмена бронирования",
            ],
        },
    };

    const current = methodData[selectedMethod];

    return (
        <section className="h-screen flex items-center py-16 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-6 mb-8">
                        <Database className="w-16 h-16" />
                        <div>
                            <h2 className="text-6xl md:text-8xl font-black leading-none">
                                HTTP Методы
                            </h2>
                            <p className="text-xl text-gray-600 mt-2">
                                CRUD операции с API
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {(["GET", "POST", "PUT", "DELETE"] as const).map(
                            (method) => {
                                const data = methodData[method];
                                return (
                                    <button
                                        key={method}
                                        onClick={() =>
                                            setSelectedMethod(method)
                                        }
                                        className={`p-6 border-2 transition-all text-center ${
                                            selectedMethod === method
                                                ? `${data.color} ${data.bgColor}`
                                                : "border-gray-300 hover:border-gray-400"
                                        }`}
                                    >
                                        <div className="font-mono font-black text-2xl">
                                            {method}
                                        </div>
                                    </button>
                                );
                            }
                        )}
                    </div>

                    <div className="grid grid-cols-5 gap-6">
                        <div className="col-span-3 bg-gray-50 border border-gray-200 p-8">
                            <div className="mb-6">
                                {current.icon}
                                <h3 className="text-4xl font-black mb-3">
                                    {current.title}
                                </h3>
                                <p className="text-lg text-gray-700">
                                    {current.description}
                                </p>
                            </div>

                            <div className="bg-gray-900 text-gray-100 p-6 font-mono text-base">
                                <pre className="whitespace-pre-wrap">
                                    {current.code}
                                </pre>
                            </div>
                        </div>

                        <div className="col-span-2 bg-white border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Code className="w-8 h-8" />
                                <div className="text-2xl font-bold">
                                    Применение
                                </div>
                            </div>
                            <div className="space-y-3">
                                {current.examples.map((example, idx) => (
                                    <div
                                        key={idx}
                                        className="border-l-4 border-gray-300 pl-4 py-2 hover:border-black hover:bg-gray-50 transition-all"
                                    >
                                        <span className="text-sm font-medium">
                                            {example}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
