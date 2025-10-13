import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Cookie } from "lucide-react";

export const BackendSection1 = memo(() => {
    return (
        <section className="h-screen flex items-center py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Практики • Backend
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            API & Данные
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="bg-gray-50 p-12 border border-gray-200">
                            <div className="flex items-center gap-4 mb-8">
                                <Cookie className="w-16 h-16" />
                                <h3 className="text-5xl font-black">
                                    Cookies для секретов
                                </h3>
                            </div>
                            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                                Токены аутентификации, session ID,
                                пользовательские настройки хранятся в httpOnly
                                cookies. Защита от XSS атак.
                            </p>
                            <div className="bg-gray-900 text-gray-100 p-8 font-mono text-base">
                                <div className="text-gray-400 mb-2">
                                    // Безопасное хранение токена
                                </div>
                                <div>
                                    <span className="text-purple-400">
                                        Cookies.set
                                    </span>
                                    (
                                    <span className="text-green-400">
                                        'auth_token'
                                    </span>
                                    , token, {"{"}
                                </div>
                                <div className="ml-6">
                                    httpOnly:{" "}
                                    <span className="text-orange-400">
                                        true
                                    </span>
                                    ,
                                </div>
                                <div className="ml-6">
                                    secure:{" "}
                                    <span className="text-orange-400">
                                        true
                                    </span>
                                    ,
                                </div>
                                <div className="ml-6">
                                    sameSite:{" "}
                                    <span className="text-green-400">
                                        'strict'
                                    </span>
                                </div>
                                <div>{"}"})</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
});
