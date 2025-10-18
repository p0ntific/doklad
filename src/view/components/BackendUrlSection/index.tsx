import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Link, Share2 } from "lucide-react";

export const BackendUrlSection = memo(() => {
    return (
        <section className="min-h-screen flex items-center py-12 sm:py-20 lg:py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="bg-white p-4 sm:p-8 lg:p-12 border border-gray-200">
                            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                                <Link className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0" />
                                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black">
                                    URL для фильтров
                                </h3>
                            </div>
                            <p className="text-base sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                                Состояние фильтров, сортировка, пагинация — всё
                                в URL. Можно поделиться ссылкой с коллегой.
                            </p>
                            <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 lg:p-8 font-mono text-sm sm:text-base lg:text-lg mb-6 overflow-x-auto">
                                <div className="text-blue-400">/products?</div>
                                <div className="ml-6 text-gray-300">
                                    category=
                                    <span className="text-green-400">
                                        laptops
                                    </span>
                                    &
                                </div>
                                <div className="ml-6 text-gray-300">
                                    sort=
                                    <span className="text-green-400">
                                        price
                                    </span>
                                    &
                                </div>
                                <div className="ml-6 text-gray-300">
                                    page=
                                    <span className="text-orange-400">2</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg">
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                                    <span className="font-bold">
                                        SEO-friendly
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                                    <span className="font-bold">Shareable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                                    <span className="font-bold">
                                        Back button работает
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
});


