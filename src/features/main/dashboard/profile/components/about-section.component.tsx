import { Edit } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
    const [showFullAbout, setShowFullAbout] = useState(false);
    return (
        <div className="bg-white rounded-[6px] p-6">
            <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-[#1d1a1a] text-xl md:text-2xl flex-1">About</h2>
                <button>
                    <div className="size-10">
                        <Edit />
                    </div>
                </button>
            </div>

            <div className="relative">
                <p className={` text-[#1d1a1a] text-sm md:text-base leading-relaxed ${!showFullAbout ? 'line-clamp-5' : ''}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet fu
                </p>
                {!showFullAbout && (
                    <button
                        onClick={() => setShowFullAbout(true)}
                        className="mt-2 font-['Open_Sans:Bold',sans-serif] font-bold text-[#534f4f] text-sm md:text-base hover:underline"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                        ...see more
                    </button>
                )}
            </div>
        </div>
    )
}