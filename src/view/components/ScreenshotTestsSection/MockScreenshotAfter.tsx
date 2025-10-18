import { memo } from "react";
import { Home, ShoppingCart, User, Search } from "lucide-react";

export const MockScreenshotAfter = memo(() => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4">
            <div className="bg-white h-full shadow-lg flex flex-col">
                <div className="bg-green-600 text-white p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="font-bold text-sm">E-Shop Pro</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Home className="w-4 h-4" />
                        <Search className="w-4 h-4" />
                        <User className="w-4 h-4" />
                    </div>
                </div>

                <div className="flex-1 p-4 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-green-600 text-white px-2 py-1 rounded">
                            $99
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-green-600 text-white px-2 py-1 rounded">
                            $149
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="text-xs font-bold bg-green-600 text-white px-2 py-1 rounded">
                            $79
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-3 flex items-center justify-between border-t">
                    <span className="text-xs text-gray-600">
                        © 2025 E-Shop
                    </span>
                    <span className="text-xs text-gray-600">3 items</span>
                </div>
            </div>
        </div>
    );
});
