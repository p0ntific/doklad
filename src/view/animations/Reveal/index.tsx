import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

interface IRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}

export const Reveal = memo<IRevealProps>(
    ({ children, delay = 0, duration = 1 }) => {
        return (
            <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration,
                    delay,
                    ease: [0.65, 0, 0.35, 1],
                }}
            >
                {children}
            </motion.div>
        );
    }
);


