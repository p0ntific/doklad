import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = memo(() => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.svg
            className="fixed top-0 left-0 pointer-events-none"
            style={{ zIndex: 999999 }}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isHovering ? 1.3 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <path
                d="M2 2 L2 26 L8 20 L12 28 L16 26 L12 18 L20 18 L2 2Z"
                fill="white"
                stroke="black"
                strokeWidth="1.5"
            />
            <path
                d="M2 2 L2 26 L8 20 L12 28 L16 26 L12 18 L20 18 L2 2Z"
                fill="black"
                fillOpacity="0.3"
            />
        </motion.svg>
    );
});
