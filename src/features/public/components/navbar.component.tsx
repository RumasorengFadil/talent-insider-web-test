import { Input } from "@/components/ui/input";
import { Bell, Play, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <header
            className="
            bg-primary
            bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_60%),radial-gradient(circle_at_86%_87%,rgba(0,0,0,0.23)_0%,rgba(0,0,0,0)_80%)]
            shadow-lg
            "
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-24">
                <div className="flex items-center justify-between py-4 gap-4 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center space-x-6">
                        {/* Logo */}
                        <div className="font-bold text-white text-xl shrink-0">LOGO</div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-xs order-3 sm:order-2 w-full sm:w-auto">
                            <div className="flex space-x-2">
                                <div className="w-full max-w-72">
                                    <Input
                                        type="text"
                                        placeholder="Search jobs..."
                                        className="w-full px-4 py-2 pr-12 rounded border bg-background border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    />
                                </div>
                                <button className="bg-[#010e80] text-white px-3 rounded hover:bg-[#010c70] transition">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-3">
                        <Link href="/" className="px-3 sm:px-4 py-2 text-white font-bold text-sm sm:text-base">
                            Property
                        </Link>
                        <Link href="/dashboard/profile" className="px-3 sm:px-4 py-2 text-white/80 font-semibold text-sm sm:text-base hover:text-white transition">
                            Profile
                        </Link>
                        <button className="p-2 text-white hover:bg-white/10 rounded transition">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="flex space-x-1 p-1 rounded overflow-hidden border border-white">
                            <div className="w-8 h-8 relative">
                                <Image
                                    src="/images/temp/image-reza-picture.avif"
                                    alt="Profile"
                                    className="w-full h-full rounded object-cover"
                                    fill
                                />
                            </div>
                            <Play className="text-white fill-white w-2 h-2 rotate-90 self-center" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}