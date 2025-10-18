import { memo, ReactNode } from "react";

interface IAuroraBackgroundProps {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = memo<IAuroraBackgroundProps>(
    ({ children, showRadialGradient = true }) => {
        return (
            <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        background: showRadialGradient
                            ? "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.2))"
                            : "none",
                    }}
                >
                    <div
                        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-20"
                        style={{
                            background:
                                "repeating-linear-gradient(100deg, #3b82f6 0%, #60a5fa 7%, #3b82f6 10%, #93c5fd 15%, #3b82f6 18%, transparent 20%, transparent 25%)",
                            animation: "aurora 60s linear infinite",
                            filter: "blur(40px)",
                        }}
                    />
                    <div
                        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 opacity-15"
                        style={{
                            background:
                                "repeating-linear-gradient(100deg, #0ea5e9 0%, #38bdf8 7%, #7dd3fc 10%, #38bdf8 15%, #0ea5e9 18%, transparent 20%, transparent 30%)",
                            animation: "aurora 50s linear infinite reverse",
                            filter: "blur(50px)",
                            animationDelay: "-10s",
                        }}
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">{children}</div>
            </div>
        );
    }
);


