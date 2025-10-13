import { memo, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface IParallaxTextProps {
    children: ReactNode;
    speed?: number;
}

export const ParallaxText = memo<IParallaxTextProps>(
    ({ children, speed = 0.5 }) => {
        const { scrollY } = useScroll();
        const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

        return <motion.div style={{ y }}>{children}</motion.div>;
    }
);
