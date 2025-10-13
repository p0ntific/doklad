declare module "animated-backgrounds" {
    import { CSSProperties } from "react";

    export interface IAnimatedBackgroundProps {
        animationName?: string;
        style?: CSSProperties;
        fps?: number;
        theme?: string;
        interactive?: boolean;
    }

    export const AnimatedBackground: React.FC<IAnimatedBackgroundProps>;
}
