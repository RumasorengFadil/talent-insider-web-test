"use client"
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
    return (
        <div
            className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
            style={{
                backgroundImage: "linear-gradient(125.417057deg, rgb(120, 119, 119) 0%, rgb(186, 185, 185) 51.563%, rgb(233, 233, 233) 89.303%)"
            }}
        >
            {/* Logo - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block fixed top-8 left-8 text-[#1d1a1a] text-2xl xl:text-4xl font-semibold tracking-[4.32px]">
                LOGO
            </div>

            {/* Tagline - Hidden on mobile, visible on larger screens */}
            <div className="hidden 2xl:block fixed top-8 right-8 text-[#534f4f] text-sm xl:text-lg font-semibold text-right max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>

            {/* Content */}
            {children}
        </div>
    )
}