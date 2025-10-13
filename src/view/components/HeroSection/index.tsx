import { memo } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/view/components/AuroraBackground";

export const HeroSection = memo(() => {
    const text = "Frontend";
    const letters = text.split("");

    return (
        <section className="h-screen relative overflow-hidden snap-start">
            <AuroraBackground showRadialGradient={true}>
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="flex justify-center items-center mb-4 sm:mb-8">
                        {letters.map((letter, idx) => (
                            <motion.span
                                key={idx}
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-black leading-none tracking-tighter inline-block"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.1,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p
                        className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-700 font-light max-w-4xl mx-auto text-center leading-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Путешествие от простых HTML-страниц к современным
                        веб-приложениям
                    </motion.p>

                    <motion.div
                        className="mt-8 sm:mt-16 h-2 w-24 sm:w-40 bg-black mx-auto"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    />
                </div>

                <motion.div
                    className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-black flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-black"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </AuroraBackground>
        </section>
    );
});
