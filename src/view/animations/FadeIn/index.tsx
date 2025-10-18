import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

interface IFadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export const FadeIn = memo<IFadeInProps>(
    ({ children, delay = 0, className, duration = 0.8, direction = "up" }) => {
        const getInitialPosition = () => {
            switch (direction) {
                case "up":
                    return { y: 50, x: 0 };
                case "down":
                    return { y: -50, x: 0 };
                case "left":
                    return { x: 50, y: 0 };
                case "right":
                    return { x: -50, y: 0 };
                case "none":
                    return { x: 0, y: 0 };
                default:
                    return { y: 50, x: 0 };
            }
        };

        return (
            <motion.div
                initial={{ opacity: 0, ...getInitialPosition() }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className={className}
            >
                {children}
            </motion.div>
        );
    }
);


