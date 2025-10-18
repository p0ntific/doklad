import { memo } from "react";
import { HeroSection } from "./view/components/HeroSection";
import { HtmlEraSection } from "./view/components/HtmlEraSection";
import { SpaSection } from "./view/components/SpaSection";
import { SsrSection } from "./view/components/SsrSection";
import { NextJsSection2 } from "./view/components/NextJsSection2";
import { BrowserLimitsSection } from "./view/components/BrowserLimitsSection";
import { FramerMotionSection } from "./view/components/FramerMotionSection";
import { ThreeDSection } from "./view/components/ThreeDSection";
import { UiKitSection } from "./view/components/UiKitSection";
import { UiKitExamplesSection } from "./view/components/UiKitExamplesSection";
import { TestingSection } from "./view/components/TestingSection";
import { TestingCodeSection } from "./view/components/TestingCodeSection";
import { ScreenshotTestsSection } from "./view/components/ScreenshotTestsSection";
import { TranslationsSection } from "./view/components/TranslationsSection";
import { ArchitectureSection } from "./view/components/ArchitectureSection";
import { CustomLibrariesSection } from "./view/components/CustomLibrariesSection";
import { SeoSection } from "./view/components/SeoSection";
import { StateSection } from "./view/components/StateSection";
import { BackendSection1 } from "./view/components/BackendSection1";
import { BackendUrlSection } from "./view/components/BackendUrlSection";
import { BackendSection2 } from "./view/components/BackendSection2";
import { FooterSection } from "./view/components/FooterSection";

export const App = memo(() => {
    return (
        <div className="bg-white text-black relative overflow-hidden">
            <div
                className="snap-y snap-mandatory h-screen overflow-y-scroll"
                style={{ zIndex: 100, position: "relative" }}
            >
                <HeroSection />
                <HtmlEraSection />
                <SpaSection />
                <SsrSection />
                <NextJsSection2 />
                <BrowserLimitsSection />
                <FramerMotionSection />
                <ThreeDSection />
                <UiKitSection />
                <UiKitExamplesSection />
                <TestingSection />
                <TestingCodeSection />
                <ScreenshotTestsSection />
                <TranslationsSection />
                <ArchitectureSection />
                <CustomLibrariesSection />
                <SeoSection />
                <StateSection />
                <BackendSection1 />
                <BackendUrlSection />
                <BackendSection2 />
                <FooterSection />
            </div>
        </div>
    );
});
