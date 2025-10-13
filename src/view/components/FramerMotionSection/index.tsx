import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { motion } from "framer-motion";
import { Play, Pause, RotateCw } from "lucide-react";

export const FramerMotionSection = memo(() => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase">
                            Технологии • Анимации
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black mb-6 sm:mb-12 leading-none">
                            Framer Motion
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-16">
                            Production-ready библиотека для анимаций в React.
                            Декларативный подход, производительность, гибкость.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                                        Базовые анимации
                                    </h3>
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                                        ) : (
                                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            FadeIn
                                        </p>
                                        <motion.div
                                            className="h-12 sm:h-16 bg-black"
                                            animate={
                                                isPlaying
                                                    ? {
                                                          opacity: [0, 1, 0],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            Slide
                                        </p>
                                        <motion.div
                                            className="h-12 sm:h-16 bg-black"
                                            animate={
                                                isPlaying
                                                    ? {
                                                          x: [0, 100, 0],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            Scale
                                        </p>
                                        <motion.div
                                            className="h-12 sm:h-16 bg-black"
                                            animate={
                                                isPlaying
                                                    ? {
                                                          scale: [1, 1.5, 1],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="bg-white p-4 sm:p-8 border border-gray-200">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
                                    Сложные эффекты
                                </h3>

                                <div className="space-y-4 sm:space-y-6">
                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            Rotate & Scale
                                        </p>
                                        <div className="flex justify-center items-center h-20 sm:h-24">
                                            <motion.div
                                                className="w-12 h-12 sm:w-16 sm:h-16 bg-black flex items-center justify-center"
                                                animate={
                                                    isPlaying
                                                        ? {
                                                              rotate: 360,
                                                              scale: [
                                                                  1, 1.5, 1,
                                                              ],
                                                          }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <RotateCw className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            Spring Physics
                                        </p>
                                        <motion.div
                                            className="h-12 sm:h-16 bg-black"
                                            animate={
                                                isPlaying
                                                    ? {
                                                          y: [0, -50, 0],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                                repeat: Infinity,
                                                repeatDelay: 0.5,
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                            Path Animation
                                        </p>
                                        <div className="relative h-12 sm:h-16 overflow-hidden">
                                            <motion.div
                                                className="w-4 h-4 bg-black rounded-full absolute"
                                                animate={
                                                    isPlaying
                                                        ? {
                                                              x: [
                                                                  0, 100, 200,
                                                                  100, 0,
                                                              ],
                                                              y: [
                                                                  24, 0, 24, 48,
                                                                  24,
                                                              ],
                                                          }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
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
