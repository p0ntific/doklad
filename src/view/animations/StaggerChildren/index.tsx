import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

interface IStaggerChildrenProps {
    children: ReactNode;
    staggerDelay?: number;
}

export const StaggerChildren = memo<IStaggerChildrenProps>(
    ({ children, staggerDelay = 0.1 }) => {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: staggerDelay,
                        },
                    },
                }}
            >
                {children}
            </motion.div>
        );
    }
);

interface IStaggerItemProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
}

export const StaggerItem = memo<IStaggerItemProps>(
    ({ children, direction = "up" }) => {
        const getInitialPosition = () => {
            switch (direction) {
                case "up":
                    return { y: 30, x: 0 };
                case "down":
                    return { y: -30, x: 0 };
                case "left":
                    return { x: 30, y: 0 };
                case "right":
                    return { x: -30, y: 0 };
                default:
                    return { y: 30, x: 0 };
            }
        };

        return (
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...getInitialPosition() },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        );
    }
);
