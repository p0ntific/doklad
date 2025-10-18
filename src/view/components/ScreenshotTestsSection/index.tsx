import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { ScaleIn } from "@/view/animations/ScaleIn";
import { Camera, Image as ImageIcon, GitCompare } from "lucide-react";
import { useImageCompareSlider } from "./useImageCompareSlider";
import { MockScreenshotBefore } from "./MockScreenshotBefore";
import { MockScreenshotAfter } from "./MockScreenshotAfter";
import { MockScreenshotDiff } from "./MockScreenshotDiff";

export const ScreenshotTestsSection = memo(() => {
    const { sliderPosition, handleMouseDown, handleMouseMove, handleMouseUp } =
        useImageCompareSlider();
    const [showDiff, setShowDiff] = useState(true);

    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Визуальное тестирование • Сравнение
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-12 leading-none">
                            Screenshot Tests
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-12">
                            Сравнение эталонных скриншотов с текущими.
                            Автоматическое выявление визуальных изменений.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                        <ScaleIn delay={0.5}>
                            <div className="bg-white border border-gray-200 p-4 sm:p-6">
                                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                    <GitCompare className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                        Сравнение
                                    </h3>
                                </div>

                                <div
                                    className="relative bg-gray-100 border-2 border-gray-300 overflow-hidden select-none"
                                    style={{ aspectRatio: "16/10" }}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                >
                                    <div className="absolute inset-0">
                                        <MockScreenshotBefore />
                                    </div>

                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{
                                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                                        }}
                                    >
                                        <MockScreenshotAfter />
                                    </div>

                                    <div
                                        className="absolute top-0 bottom-0 w-1 bg-blue-500 cursor-ew-resize z-10"
                                        style={{ left: `${sliderPosition}%` }}
                                    >
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                            <div className="flex gap-0.5">
                                                <div className="w-0.5 h-3 bg-white"></div>
                                                <div className="w-0.5 h-3 bg-white"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1.5 text-xs sm:text-sm font-bold rounded">
                                        ЭТАЛОН
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1.5 text-xs sm:text-sm font-bold rounded">
                                        ТЕКУЩИЙ
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-gray-600">
                                    <span className="flex items-center gap-2">
                                        <Camera className="w-4 h-4" />
                                        baseline.png
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <ImageIcon className="w-4 h-4" />
                                        current.png
                                    </span>
                                </div>
                            </div>
                        </ScaleIn>

                        <ScaleIn delay={0.6}>
                            <div className="bg-white border border-gray-200 p-4 sm:p-6">
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <div className="flex items-center gap-3">
                                        <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                            Diff
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setShowDiff(!showDiff)}
                                        className="px-3 py-1.5 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-colors rounded font-medium"
                                    >
                                        {showDiff ? "Скрыть" : "Показать"}
                                    </button>
                                </div>

                                <div
                                    className="relative bg-gray-100 border-2 border-gray-300 overflow-hidden"
                                    style={{ aspectRatio: "16/10" }}
                                >
                                    <MockScreenshotDiff showDiff={showDiff} />

                                    {showDiff && (
                                        <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1.5 text-xs sm:text-sm font-bold rounded flex items-center gap-2">
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                            3 различия найдено
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 space-y-2 text-xs sm:text-sm">
                                    <div className="flex items-center justify-between p-2 bg-red-50 border border-red-200 rounded">
                                        <span className="text-gray-700">
                                            Изменения обнаружены
                                        </span>
                                        <span className="font-bold text-red-600">
                                            Failed
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-600">
                                        <span>Пикселей изменено:</span>
                                        <span className="font-mono font-bold">
                                            1,247 / 921,600
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-600">
                                        <span>Процент различий:</span>
                                        <span className="font-mono font-bold text-red-600">
                                            0.135%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </div>
        </section>
    );
});
