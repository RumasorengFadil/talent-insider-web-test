"use client"

import { useAuthStore } from '@/context/stores/use-auth.store';
import AboutSection from '@/features/main/dashboard/profile/components/about-section.component';
import ProfileHeader from '@/features/main/dashboard/profile/components/profile-header.component';
import ProfileStatus from '@/features/main/dashboard/profile/components/profile-status.component';
import { ChevronsDown } from 'lucide-react';
import { useState } from 'react';

export default function PageClient() {
    const [showMore, setShowMore] = useState(false);
    const { user } = useAuthStore();

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e9e9e9] to-[#787777]">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 md:px-6">

                {user &&
                    <ProfileHeader user={user} onEdit={() => { }} />
                }

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[485px_1fr] gap-6 mt-6 md:mt-10 pb-10">
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        {/* Profile Status Card */}
                        <ProfileStatus />

                        {/* About Card */}
                        <AboutSection />
                    </div>

                    {/* Right Content */}
                    <div className="bg-white rounded-[6px] p-6">
                        <div className={`transition-all duration-300 ${showMore ? 'min-h-[400px]' : 'h-64 md:h-96'} bg-[#f5f5f5] rounded flex items-center justify-center text-[#787777]`}>
                            <p className="" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Content tabs will appear here
                            </p>
                        </div>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="w-full bg-[#efefef] rounded-b-[6px] p-3 flex items-center justify-center gap-3 hover:bg-[#e0e0e0] transition-colors mt-4"
                        >
                            <p className="text-[#787777] text-lg md:text-xl">
                                {showMore ? 'See Less' : 'See More'}
                            </p>
                            <div className={`size-[30px] transition-transform ${showMore ? 'rotate-180' : ''}`}>
                                <ChevronsDown />
                            </div>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
