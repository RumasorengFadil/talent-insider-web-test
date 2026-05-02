import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/context/stores/use-auth.store";
import { useCookies } from "@/hooks/use-cookies";
import { Bell, ChevronDown, Globe, Hotel, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMail } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const menuItems = [
    {
        name: "My Profile",
        icon: User,
        to: "/dashboard/profile",
    },
    {
        name: "Property",
        icon: Hotel,
        to: "/",
    },
]
export default function Navbar() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { user } = useAuthStore();
    const { removeCookie } = useCookies();
    const handleLogout = () => {
        removeCookie("access_token");
        removeCookie("user");
        router.push("/")
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };

        if (userMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userMenuOpen]);

    return (
        <header className="bg-white px-4 md:px-6 py-4 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-6">
                {/* Logo */}
                <div className=" font-semibold text-[#1d1a1a] text-2xl md:text-[36px] tracking-[4.32px] shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                    LOGO
                </div>

                {/* Search Bar */}
                <div className="flex-1 bg-[#efefef] rounded-[6px] h-10 relative">
                    <div className="flex items-center gap-3 px-3 md:px-2 h-full">
                        <Button
                            variant="ghost"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex gap-2 md:gap-3 shrink-0 border"
                        >
                            <Globe />
                            <span className="hidden md:block text-sm">Menu</span>
                            <div className="hidden md:block  ">
                                <ChevronDown />
                            </div>
                        </Button>

                        <div className="hidden md:block h-5 w-px bg-[#787777] rotate-180" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 bg-transparent outline-none  text-[#787777] text-sm"
                        />

                        <Button variant={"ghost"} className="bg-secondary cursor-pointer rounded-[6px] px-5 py-1 shrink-0 hover:bg-secondary/90">
                            <Search className="text-white size-6" />
                        </Button>
                    </div>
                </div>

                {/* User Controls */}
                <div className="relative flex items-center gap-2 shrink-0" ref={userMenuRef}>
                    <Button variant={"ghost"} className="cursor-pointer items-center justify-center hidden md:flex">
                        <IoMail className="size-6" />
                    </Button>

                    <Button variant={"ghost"} className="cursor-pointer hidden md:block">
                        <Bell className='size-6' />
                    </Button>

                    <Button
                        variant={"ghost"}
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex cursor-pointer items-center gap-1.5 border border-[#1d1a1a] rounded-[6px] p-1.5 h-10 relative"
                    >
                        <div className='relative size-7'>
                            <Image
                                fill
                                src="/images/temp/image-reza-picture.avif"
                                alt="User"
                                className="size-7 rounded object-cover"
                            />

                        </div>
                        <div className="hidden md:block">
                            <MdArrowDropDown className={`fill-black size-6 transition ${userMenuOpen ? "rotate-180" : ""}`} />
                        </div>
                    </Button>
                    {/* Dropdown Menu */}
                    {userMenuOpen && (
                        <div className="absolute right-0 top-10 mt-2 w-56 md:w-64 bg-white rounded-[6px] shadow-lg border border-gray-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {/* User Info Section */}
                            <div className="p-4 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage
                                            src=""
                                            alt="@shadcn"
                                            className="grayscale"
                                        />
                                        <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#1d1a1a] text-sm md:text-base truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            {user?.name}
                                        </p>
                                        <p className="font-['Open_Sans:Regular',sans-serif] text-[#787777] text-xs md:text-sm truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            View Profile
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="py-2">
                                {menuItems.map((item, idx) =>
                                    <Link key={idx} href={item.to} className="w-full px-4 py-2.5 text-left font-['Open_Sans:Regular',sans-serif] text-[#1d1a1a] text-sm md:text-base hover:bg-gray-50 transition-colors flex items-center gap-3">
                                        {<item.icon className="size-5" />}
                                        {item.name}
                                    </Link>
                                )}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100"></div>

                            {/* Bottom Actions */}
                            <div className="py-2">
                                <Button onClick={handleLogout} variant={"ghost"} className="w-full cursor-pointer px-4 py-2.5 text-left font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[#e30607] text-sm md:text-base hover:bg-red-50 transition-colors flex items-center gap-3" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}