import { Button } from "@/components/ui/button";
import { UserResponse } from "@/types/user-response";
import { Edit, Flower } from "lucide-react";
import Image from "next/image";

type ProfileHeaderProps = {
    user: UserResponse;
    onEdit?: () => void;
};

export default function ProfileHeader({
    user,
    onEdit,
}: ProfileHeaderProps) {
    return (
        <div>
            {/* Cover Photo */}
            <div className="relative mt-6 md:mt-8 rounded-t-[40px] md:rounded-t-[60px] overflow-hidden h-40 md:h-70">
                <Image
                    src={"/images/temp/image-cover.jpg"}
                    alt="Cover"
                    className="w-full h-full object-cover"
                    fill
                />
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-b-[40px] md:rounded-b-[60px] px-4 md:px-8 pt-16 md:pt-20 pb-8 md:pb-12 -mt-8 md:-mt-12 relative">
                {/* Profile Picture */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-24 w-32 h-36 md:w-[200px] md:h-[240px]">
                    <div className="absolute border-16 border-secondary rounded-b-full inset-0 size-full">
                        <Image
                            src={"/images/temp/image-reza-picture.avif"}
                            fill
                            alt="user"
                            className="rounded-b-full"
                        />
                    </div>
                </div>

                {/* Name and Location */}
                <div className="text-center mt-12 md:mt-16 space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="font-bold text-xl md:text-[28px]">
                            {user?.name}
                        </h1>

                        <Flower />

                        <Button
                            className="cursor-pointer"
                            variant="ghost"
                            onClick={onEdit}
                        >
                            <Edit className="size-6" />
                        </Button>
                    </div>

                    <p
                        className="text-[#1d1a1a] text-sm md:text-base"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                        South Jakarta, DKI Jakarta, Indonesia
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-4">
                        <Button className="cursor-pointer bg-secondary text-white font-semibold p-5 rounded-[6px] text-base md:text-lg hover:bg-secondary/90 transition-colors">
                            Connect
                        </Button>

                        <Button
                            variant="outline"
                            className="cursor-pointer border border-[#1d1a1a] text-[#1d1a1a] font-semibold p-5 rounded-[6px] text-base md:text-lg hover:bg-white/90 transition-colors"
                        >
                            More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}