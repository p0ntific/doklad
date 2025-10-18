import { useState, useCallback, useEffect } from "react";

interface IUseImageCompareSlider {
    sliderPosition: number;
    handleMouseDown: () => void;
    handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseUp: () => void;
    isDragging: boolean;
}

export const useImageCompareSlider = (): IUseImageCompareSlider => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!isDragging) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;

            setSliderPosition(Math.max(0, Math.min(100, percentage)));
        },
        [isDragging]
    );

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mouseup", handleGlobalMouseUp);
        }

        return () => {
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, [isDragging]);

    return {
        sliderPosition,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        isDragging,
    };
};
