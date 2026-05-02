"use client"
import Footer from "@/components/footer.component";
import Navbar from "@/features/public/components/navbar.component";
import { ReactNode } from "react";

export default function LayoutClient({ children }: { children: ReactNode }) {
    return (
        <div className="bg-[#f3f3f3] min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            {children}

            {/* Foooter */}
            <Footer />
        </div>
    )
}