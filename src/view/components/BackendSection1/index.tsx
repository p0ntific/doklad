import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Cookie } from "lucide-react";

export const BackendSection1 = memo(() => {
    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Практики • Backend
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-12 leading-none">
                            API & Данные
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="bg-gray-50 p-4 sm:p-8 md:p-12 border border-gray-200">
                            <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                                <Cookie className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
                                    Cookies для секретов
                                </h3>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-8 leading-relaxed">
                                Токены аутентификации, session ID,
                                пользовательские настройки хранятся в httpOnly
                                cookies. Защита от XSS атак.
                            </p>
                            <div className="bg-gray-900 text-gray-100 p-3 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
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
