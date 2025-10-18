import { memo } from "react";
import { Home, ShoppingCart, User, Search } from "lucide-react";

interface IMockScreenshotDiff {
    showDiff: boolean;
}

export const MockScreenshotDiff = memo(({ showDiff }: IMockScreenshotDiff) => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4 relative">
            <div className="bg-white h-full shadow-lg flex flex-col relative">
                <div
                    className={`bg-blue-600 text-white p-3 flex items-center justify-between transition-all duration-300 ${
                        showDiff ? "opacity-40" : "opacity-100"
                    }`}
                >
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="font-bold text-sm">E-Shop</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Home className="w-4 h-4" />
                        <Search className="w-4 h-4" />
                        <User className="w-4 h-4" />
                    </div>
                </div>

                {showDiff && (
                    <>
                        <div className="absolute top-0 left-0 right-0 h-[42px] bg-red-500 opacity-30 border-2 border-red-600 pointer-events-none animate-pulse"></div>

                        <div className="absolute top-1 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                            COLOR
                        </div>

                        <div className="absolute top-1 left-20 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                            TEXT
                        </div>
                    </>
                )}

                <div className="flex-1 p-4 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded relative">
                            $99
                            {showDiff && (
                                <div className="absolute inset-0 bg-red-500 opacity-30 border border-red-600 rounded animate-pulse"></div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded relative">
                            $149
                            {showDiff && (
                                <div className="absolute inset-0 bg-red-500 opacity-30 border border-red-600 rounded animate-pulse"></div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded relative">
                            $79
                            {showDiff && (
                                <div className="absolute inset-0 bg-red-500 opacity-30 border border-red-600 rounded animate-pulse"></div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className={`bg-gray-100 p-3 flex items-center justify-between border-t transition-all duration-300 ${
                        showDiff ? "opacity-40" : "opacity-100"
                    }`}
                >
                    <span className="text-xs text-gray-600">
                        © 2024 E-Shop
                    </span>
                    <span className="text-xs text-gray-600">3 items</span>
                </div>

                {showDiff && (
                    <div className="absolute bottom-3 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                        YEAR
                    </div>
                )}
            </div>
        </div>
    );
});
