import { Button } from "@/components/ui/button"
import { formatIDRShort } from "@/utils/format-idr-short"
import { Bookmark, Clock, MapPin, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { PropertyResponse } from "../types/property-response.type"


export default function PropertyCard({ property }: { property: PropertyResponse }) {
    return (
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between space-x-2 pb-4">
                <div className="relative w-9 h-9">
                    <Image
                        src={property.image_url ?? "_"}
                        alt={property.name}
                        className="w-full h-full object-cover rounded-md"
                        fill
                    />
                </div>

                <div className="flex flex-col flex-1">
                    <p className="line-clamp-1 font-bold">{property.name}</p>
                    <div className="flex items-center space-x-1">
                        <p className="text-sm line-clamp-1">{property.address}</p>
                        <ShieldCheck className="w-4 h-4 text-white fill-blue-600" />
                    </div>
                </div>

                <div className="self-start cursor-pointer">
                    <Bookmark />
                </div>
            </div>

            {/* Details */}
            <div>
                <div className="flex gap-2 mb-2 border-b border-gray-100 pb-2">
                    <span className="flex-1 text-center line-clamp-1 p-2 bg-blue-100 text-xs text-blue-900 rounded">
                        {property.type}
                    </span>
                    <span className="flex-1 text-center line-clamp-1 p-2 bg-blue-100 text-xs text-blue-900 rounded">
                        {property.status}
                    </span>
                    <span className="flex-1 text-center line-clamp-1 p-2 bg-blue-100 text-xs text-blue-900 rounded">
                        {formatIDRShort(+property.price)}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 shrink-0 fill-red-500 text-white" />
                        <span className="text-xs line-clamp-1">
                            {property.address}
                        </span>
                    </div>

                    <div className="w-full text-center rounded-sm bg-[#FFF5E5] px-1">
                        <span className="text-xs">LT {property.land_area} </span>
                        <span className="text-xs">LB {property.building_area}</span>
                    </div>

                    <div className="flex space-x-1 items-center">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{property.duration ?? "-"}</span>
                    </div>
                </div>

                <Button
                    className="w-full bg-primary cursor-pointer
          bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_60%),radial-gradient(circle_at_86%_87%,rgba(0,0,0,0.23)_0%,rgba(0,0,0,0)_80%)]
          shadow-inner text-white py-5 rounded-sm font-semibold hover:bg-primary/90 transition"
                >
                    Book
                </Button>
            </div>
        </div>
    )
}