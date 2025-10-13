import { memo } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Link, Share2 } from "lucide-react";

export const BackendUrlSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="bg-white p-12 border border-gray-200">
                            <div className="flex items-center gap-4 mb-8">
                                <Link className="w-16 h-16" />
                                <h3 className="text-5xl font-black">
                                    URL для фильтров
                                </h3>
                            </div>
                            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                                Состояние фильтров, сортировка, пагинация — всё
                                в URL. Можно поделиться ссылкой с коллегой.
                            </p>
                            <div className="bg-gray-900 text-gray-100 p-8 font-mono text-lg mb-6">
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
                            <div className="flex items-center gap-8 text-lg">
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-5 h-5 text-green-600" />
                                    <span className="font-bold">
                                        SEO-friendly
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-5 h-5 text-blue-600" />
                                    <span className="font-bold">Shareable</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Share2 className="w-5 h-5 text-purple-600" />
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
