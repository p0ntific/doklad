import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CAT_STAGES = [
    {
        level: 1,
        name: "KITTEN",
        art: `    /\\_/\\  
   ( o.o ) 
    > ^ <`,
        equipment: "",
        background: "",
        clicksNeeded: 0,
        clickPower: 1,
    },
    {
        level: 2,
        name: "ARMED CAT",
        art: `     /\\_/\\  
    ( o.o )╗
     > ^ < ║
    /|   |\\`,
        equipment: "╔═══",
        background: "   🎾",
        clicksNeeded: 30,
        clickPower: 2,
    },
    {
        level: 3,
        name: "WARRIOR CAT",
        art: `     /\\_/\\  
    ( ^.^ )╗
     > ^ < ║
    /|   |\\
   (_|   |_)`,
        equipment: "╔═══   🗡",
        background: "🎾  🍖",
        clicksNeeded: 100,
        clickPower: 5,
    },
    {
        level: 4,
        name: "KNIGHT CAT",
        art: `    ⚔ /\\_/\\  
     ( @.@ )╗
      > ^ < ║
     /|   |\\
    ( |   | )
     (_| |_)`,
        equipment: "╔═══",
        background: "🎾🍖🏺",
        clicksNeeded: 300,
        clickPower: 10,
    },
    {
        level: 5,
        name: "MEGA CAT",
        art: `    👑 /\\_/\\  
      ( ◉.◉ )╗
       > ^ < ║
      /|   |\\
     ( |   | )
    (  |   |  )
      (_| |_)`,
        equipment: "⚔🗡🛡",
        background: "🎾🍖🏺🐟",
        clicksNeeded: 800,
        clickPower: 25,
    },
    {
        level: 6,
        name: "LEGEND CAT",
        art: `    👑 /\\_/\\  
      ( ★.★ )╗
    ⚡ > ^ < ║
      /|   |\\
     ( |   | )
    (  |   |  )
   (   |   |   )
      (_| |_)`,
        equipment: "⚔🗡🛡🏹",
        background: "🎾🍖🏺🐟🎁",
        clicksNeeded: 2000,
        clickPower: 50,
    },
    {
        level: 7,
        name: "GOD CAT",
        art: `    👑👑 /\\_/\\  
        ( ✧.✧ )╗
    ⚡⚡> ^ < ║⚡
        /|   |\\
       ( |   | )
      (  |   |  )
     (   |   |   )
        (_| |_)
      ☆ ★ ☆ ★`,
        equipment: "⚔🗡🛡🏹💎",
        background: "🎾🍖🏺🐟🎁🏆",
        clicksNeeded: 5000,
        clickPower: 100,
    },
];

export const FooterSection = memo(() => {
    const [clicks, setClicks] = useState(0);
    const [level, setLevel] = useState(0);
    const [showClickEffect, setShowClickEffect] = useState(false);
    const [autoClicker, setAutoClicker] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [totalClicks, setTotalClicks] = useState(0);

    const currentCat = CAT_STAGES[level];
    const nextCat = CAT_STAGES[level + 1];

    // Auto-clicker effect
    useEffect(() => {
        if (autoClicker > 0) {
            const interval = setInterval(() => {
                const gain = autoClicker * multiplier;
                setClicks((prev) => prev + gain);
                setTotalClicks((prev) => prev + gain);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [autoClicker, multiplier]);

    // Check for level up
    useEffect(() => {
        if (nextCat && clicks >= nextCat.clicksNeeded) {
            setLevel((prev) => prev + 1);
        }
    }, [clicks, nextCat]);

    const handleCatClick = () => {
        const gain = currentCat.clickPower * multiplier;
        setClicks((prev) => prev + gain);
        setTotalClicks((prev) => prev + gain);
        setShowClickEffect(true);
        setTimeout(() => setShowClickEffect(false), 200);
    };

    const buyAutoClicker = () => {
        const cost = (autoClicker + 1) * 50;
        if (clicks >= cost) {
            setClicks((prev) => prev - cost);
            setAutoClicker((prev) => prev + 1);
        }
    };

    const buyMultiplier = () => {
        const cost = multiplier * 200;
        if (clicks >= cost) {
            setClicks((prev) => prev - cost);
            setMultiplier((prev) => prev + 1);
        }
    };

    const autoClickerCost = (autoClicker + 1) * 50;
    const multiplierCost = multiplier * 200;
    const progressPercent = nextCat ? Math.min((clicks / nextCat.clicksNeeded) * 100, 100) : 100;
    const progressBars = Math.floor(progressPercent / 5);

    return (
        <section className="min-h-screen flex items-center justify-center relative bg-black snap-start py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <motion.div 
                        className="text-center mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <pre className="text-green-400 font-mono text-[8px] sm:text-xs mb-2">
{`╔════════════════════════════════════════════════╗
║  ███████╗██████╗  ██████╗ ███╗   ██╗████████╗ ║
║  ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝ ║
║  █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║    ║
║  ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║    ║
║  ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║    ║
╚════════════════════════════════════════════════╝`}
                        </pre>
                        <p className="text-green-400 font-mono text-xs animate-pulse">THE JOURNEY CONTINUES</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-4">
                        {/* Left Panel */}
                        <div className="bg-black border-2 border-green-400 p-3 font-mono">
                            {/* Cat Display */}
                            <div className="text-center mb-2">
                                <div className="text-green-400 text-sm">
                                    ╔══ {currentCat.name} LV.{currentCat.level} ══╗
                                </div>
                            </div>

                            {/* Cat with Equipment */}
                            <motion.div
                                className="cursor-pointer select-none relative mb-2"
                                onClick={handleCatClick}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={showClickEffect ? { 
                                    filter: ['brightness(1)', 'brightness(2)', 'brightness(1)'] 
                                } : {}}
                            >
                                <pre className="text-green-400 text-center text-sm sm:text-base leading-tight">
                                    {currentCat.art}
                                </pre>
                                {currentCat.equipment && (
                                    <div className="text-center text-yellow-400 text-xs mt-1">
                                        {currentCat.equipment}
                                    </div>
                                )}
                                {currentCat.background && (
                                    <div className="text-center text-xs mt-1">
                                        {currentCat.background}
                                    </div>
                                )}
                                <div className="text-center mt-2 text-green-400 text-xs animate-pulse">
                                    [CLICK]
                                </div>
                            </motion.div>

                            {/* Progress */}
                            {nextCat && (
                                <div className="mb-2">
                                    <div className="text-green-400 text-[10px]">
                                        NEXT: {clicks}/{nextCat.clicksNeeded}
                                    </div>
                                    <div className="text-green-400 font-mono text-xs">
                                        [{progressBars > 0 ? '█'.repeat(progressBars) : ''}{' '.repeat(20 - progressBars)}]
                                    </div>
                                </div>
                            )}

                            {/* Stats */}
                            <div className="border-t-2 border-green-400 pt-2">
                                <div className="grid grid-cols-2 gap-2 text-green-400 text-xs">
                                    <div>PTS: <span className="text-yellow-400">{clicks}</span></div>
                                    <div>TOTAL: {totalClicks}</div>
                                    <div>PWR: <span className="text-red-400">×{currentCat.clickPower}</span></div>
                                    <div>MULT: <span className="text-cyan-400">×{multiplier}</span></div>
                                    <div>AUTO: <span className="text-purple-400">{autoClicker}/s</span></div>
                                    <div>DPS: <span className="text-orange-400">{autoClicker * multiplier}</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Shop */}
                        <div className="bg-black border-2 border-green-400 p-3 font-mono">
                            <div className="text-green-400 text-center text-sm mb-2">
                                ╔═══ SHOP ═══╗
                            </div>
                            
                            <div className="space-y-2">
                                {/* Auto-Clicker */}
                                <button
                                    onClick={buyAutoClicker}
                                    disabled={clicks < autoClickerCost}
                                    className={`w-full p-2 border text-xs transition-all ${
                                        clicks >= autoClickerCost
                                            ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10'
                                            : 'border-gray-600 text-gray-600'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="text-left">
                                            <div>[1] AUTO-CLICK #{autoClicker + 1}</div>
                                            <div className="text-[10px]">+1/SEC</div>
                                        </div>
                                        <div>{autoClickerCost}</div>
                                    </div>
                                </button>

                                {/* Multiplier */}
                                <button
                                    onClick={buyMultiplier}
                                    disabled={clicks < multiplierCost}
                                    className={`w-full p-2 border text-xs transition-all ${
                                        clicks >= multiplierCost
                                            ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10'
                                            : 'border-gray-600 text-gray-600'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="text-left">
                                            <div>[2] MULTIPLIER ×{multiplier + 1}</div>
                                            <div className="text-[10px]">BOOST ALL</div>
                                        </div>
                                        <div>{multiplierCost}</div>
                                    </div>
                                </button>

                                {level === CAT_STAGES.length - 1 && (
                                    <div className="p-2 border-2 border-yellow-400 text-yellow-400 text-center text-xs animate-pulse">
                                        ★ MAX LVL ★
                                    </div>
                                )}
                            </div>

                            {/* Tips */}
                            <div className="mt-2 border-t-2 border-green-400 pt-2">
                                <div className="text-green-400 text-[10px] space-y-1">
                                    <div>&gt; MULTIPLIER BOOSTS EVERYTHING</div>
                                    <div>&gt; AUTO-CLICKS GAIN FROM MULT</div>
                                    <div>&gt; EQUIPMENT UNLOCKS AT LEVELS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 text-center text-green-400 font-mono text-xs">
                        <div className="mb-1">━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
                        <div>(C) 2025 • MADE WITH &lt;LOVE/&gt;</div>
                    </div>
                </div>
            </div>
        </section>
    );
});
