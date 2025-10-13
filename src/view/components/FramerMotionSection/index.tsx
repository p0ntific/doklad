import { memo, useState } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { motion } from "framer-motion";
import { Play, Pause, RotateCw } from "lucide-react";

export const FramerMotionSection = memo(() => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="h-screen flex items-center py-32 relative bg-white border-t border-gray-200 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Технологии • Анимации
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            Framer Motion
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            Production-ready библиотека для анимаций в React.
                            Декларативный подход, производительность, гибкость.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-8  border border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold">
                                        Базовые анимации
                                    </h3>
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="p-2 hover:bg-gray-100  transition-colors"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-5 h-5" />
                                        ) : (
                                            <Play className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-3">
                                            FadeIn
                                        </p>
                                        <motion.div
                                            className="h-16 bg-black "
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
                                        <p className="text-sm text-gray-600 mb-3">
                                            Slide
                                        </p>
                                        <motion.div
                                            className="h-16 bg-black "
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
                                        <p className="text-sm text-gray-600 mb-3">
                                            Scale
                                        </p>
                                        <motion.div
                                            className="h-16 bg-black "
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
                            <div className="bg-white p-8  border border-gray-200">
                                <h3 className="text-2xl font-bold mb-6">
                                    Сложные эффекты
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Rotate & Scale
                                        </p>
                                        <div className="flex justify-center items-center h-24">
                                            <motion.div
                                                className="w-16 h-16 bg-black  flex items-center justify-center"
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
                                                <RotateCw className="w-8 h-8 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Spring Physics
                                        </p>
                                        <motion.div
                                            className="h-16 bg-black "
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
                                        <p className="text-sm text-gray-600 mb-3">
                                            Path Animation
                                        </p>
                                        <div className="relative h-16">
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
