import { Button } from "@/components/ui/button";

export default function ProfileStatus() {
    return (
        <div className="bg-white rounded-[6px] p-6">
            <div className="flex items-start justify-between mb-5">
                <h2 className="font-bold text-[#1d1a1a] text-xl md:text-2xl flex-1">
                    Profile Status
                </h2>
                <Button variant={"ghost"} className="p-2 cursor-pointer">
                    <div className="w-7.5 h-1.5">
                        <svg className="size-full" fill="none" viewBox="0 0 30 6">
                            <circle cx="3" cy="3" fill="#534F4F" r="3" />
                            <circle cx="15" cy="3" fill="#534F4F" r="3" />
                            <circle cx="27" cy="3" fill="#534F4F" r="3" />
                        </svg>
                    </div>
                </Button>
            </div>

            <div className="space-y-2 mb-5">
                <p className="text-[#1d1a1a] text-lg md:text-xl font-semibold">Intermediate</p>
                <p className="text-[#1d1a1a] text-sm md:text-base" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Complete 2 steps to achieve Expert!
                </p>
            </div>

            <div className="relative w-full h-10 bg-[#d9d9d9] rounded-[6px] shadow-[inset_0px_4px_4px_0px_rgba(83,79,79,0.6)] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[76%] bg-secondary rounded-[6px] flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl">70%</span>
                </div>
            </div>

            {/* Profile Steps */}
            <div className="mt-5 space-y-3 max-h-[340px] overflow-y-auto pr-2">
                {[
                    { title: "Which industry do you work in?", button: "Add industry" },
                    { title: "Which University do you go to?", button: "Add university" },
                    { title: "Which industry do you work in?", button: "Add industry" }
                ].map((item, index) => (
                    <div key={index} className="bg-[#efefef] rounded-[12px] p-4 md:p-5 space-y-4">
                        <div className="space-y-3">
                            <p className="font-medium text-[#1d1a1a] text-base md:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                                {item.title}
                            </p>
                            <p className=" text-[#1d1a1a] text-sm md:text-base leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Members who add an industry receive up to 2.5 times as many profile views
                            </p>
                        </div>
                        <Button variant={"outline"} className="w-full cursor-pointer border border-[#1d1a1a] text-[#1d1a1a] font-semibold  p-5 rounded-[6px] text-sm md:text-base hover:bg-white transition-colors" style={{ fontVariationSettings: "'wdth' 100" }}>
                            {item.button}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}