"use client"

import Footer from '@/components/footer.component';
import Navbar from '@/features/main/dashboard/components/navbar.component';
import { ReactNode } from 'react';

export default function LayoutClient({ children }: { children: ReactNode }) {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            {children}

            {/* footer */}
            <Footer />
        </div>
    )
}