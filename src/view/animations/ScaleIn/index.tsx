import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

interface IScaleInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}

export const ScaleIn = memo<IScaleInProps>(
    ({ children, delay = 0, duration = 0.6 }) => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        );
    }
);
