import { memo } from "react";
import { AuroraBackground } from "../AuroraBackground";
import { motion } from "framer-motion";

import meme from "./assets/meme.png";
import bg from "./assets/bg.jpeg";

export const KonecSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-8 sm:py-20 md:py-32 relative bg-black border-t border-gray-200 snap-start">
            <AuroraBackground showRadialGradient={true}>
                <div className="flex gap-16 px-20 flex-col items-center">
                    <motion.h1
                        className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-700 font-light max-w-4xl mx-auto text-center leading-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        оно того стоит?
                    </motion.h1>
                    <div className="flex gap-20">
                        <img src={bg} className="w-[500px]" alt="Background" />
                        <img src={meme} className="w-[500px]" alt="Meme" />
                    </div>
                </div>
            </AuroraBackground>
        </section>
    );
});

KonecSection.displayName = "KonecSection";
