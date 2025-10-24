import { memo } from "react";
import { motion } from "framer-motion";

import meme from "./assets/meme.png";

export const BackendMemeSection = memo(() => {
    return (
        <section className="h-screen flex flex-col gap-20 items-center py-8 sm:py-20 md:py-32 relative bg-white border-t border-gray-200 snap-start">
            <motion.h1
                className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-700 max-w-4xl font-bold mx-auto text-center leading-tight px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                Чуть-чуть про бэкенд
            </motion.h1>
            <img
                src={meme}
                className="w-[500px] rounded-3xl"
                alt="Background"
            />
        </section>
    );
});
