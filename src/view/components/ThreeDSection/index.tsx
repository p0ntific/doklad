import { memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FadeIn } from "@/view/animations/FadeIn";
import { Code2, Sparkles } from "lucide-react";
import MinecraftSheep from "./MinecraftSheep";

const Scene = memo(() => {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} />
            <MinecraftSheep />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </>
    );
});

export const ThreeDSection = memo(() => {
    return (
        <section className="h-screen flex items-center py-20 relative bg-gray-50 snap-start">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-gray-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                            Технологии • 3D
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 leading-none">
                            Three.js
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-2xl text-gray-700 leading-relaxed mb-16">
                            3D-графика в браузере. От простых форм до сложных
                            сцен. WebGL-производительность с удобным API.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <FadeIn delay={0.5}>
                            <div className="bg-white p-8 border border-gray-200 h-[500px]">
                                <Suspense
                                    fallback={
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-gray-400">
                                                Загрузка 3D...
                                            </div>
                                        </div>
                                    }
                                >
                                    <Canvas camera={{ position: [0, 0, 5] }}>
                                        <Scene />
                                    </Canvas>
                                </Suspense>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="space-y-6">
                                <div className="bg-white p-6 border border-gray-200">
                                    <Code2 className="w-10 h-10 mb-4" />
                                    <h3 className="text-2xl font-bold mb-3">
                                        Minecraft Sheep 🐑
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">
                                                •
                                            </span>
                                            <span>Пиксельная 3D модель</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">
                                                •
                                            </span>
                                            <span>
                                                Радужная шерсть
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">
                                                •
                                            </span>
                                            <span>
                                                Автоповорот
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">
                                                •
                                            </span>
                                            <span>Воксельная геометрия</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 border border-gray-200">
                                    <Sparkles className="w-10 h-10 mb-4" />
                                    <h3 className="text-2xl font-bold mb-3">
                                        React Three Fiber
                                    </h3>
                                    <p className="text-gray-600">
                                        Декларативный подход к Three.js через
                                        React. Создание 3D сцен с помощью
                                        компонентов. Интеграция с React ecosystem.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
});
