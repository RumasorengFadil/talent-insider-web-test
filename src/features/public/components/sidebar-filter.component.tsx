import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DEFAULT_PRICE_RANGE = [1_000_000_000, 9_000_000_000];
const DEFAULT_STEP = 100_000_000;
export default function SidebarFilter({ filters, setFilter }: { setFilter: <K extends keyof PropertySearchParams>(key: K, value: PropertySearchParams[K] | ((prev: PropertySearchParams[K]) => PropertySearchParams[K])) => void, filters: PropertySearchParams }) {

    const [priceRange, setPriceRange] = useState(DEFAULT_PRICE_RANGE);

    const [expandedSections, setExpandedSections] = useState({
        status: true,
        location: true,
        type: true,
        priceRange: true
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <h2 className="font-bold mb-4">FILTER BY</h2>

                {/* Status */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('status')}
                        className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-[#ec0e52] transition"
                    >
                        Status
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.status ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.status && (
                        <div className="space-y-2">
                            {['New', 'Second'].map((status) => (
                                <label key={status} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters?.status?.includes(status)}
                                        onChange={(e) => {
                                            setFilter("status", (prev: string[] = []) => {
                                                if (e.target.checked) {
                                                    return [...prev, status]
                                                } else {
                                                    return prev.filter((c) => c !== status);
                                                }
                                            })
                                        }}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">{status}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Location */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('location')}
                        className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-[#ec0e52] transition"
                    >
                        Location
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.location ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.location && (
                        <div className="space-y-2">
                            {['Bekasi', 'Jakarta', 'Bandung', 'Bogor'].map((location) => (
                                <label key={location} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters?.location?.includes(location)}
                                        onChange={(e) => {
                                            setFilter("location", (prev: string[] = []) => {
                                                if (e.target.checked) return [...prev, location]
                                                else return prev.filter(prevLoc => prevLoc !== location);
                                            })
                                        }}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">{location}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Type */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('type')}
                        className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-[#ec0e52] transition"
                    >
                        Type
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.type ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedSections.type && (
                        <div className="space-y-2">
                            {['Rumah', 'Apartement', 'Ruko', 'Hotel'].map((type) => (
                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters?.type?.includes(type)}
                                        onChange={(e) => {
                                            setFilter("type", (prev: string[] = []) => {
                                                if (e.target.checked) return [...prev, type]
                                                else return prev.filter(prevLoc => prevLoc !== type);
                                            })
                                        }}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-700">{type}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('priceRange')}
                        className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-[#ec0e52] transition"
                    >
                        Price Range
                        <ChevronDown
                            className={`w-4 h-4 transition-transform ${expandedSections.priceRange ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    {expandedSections.priceRange && (
                        <>
                            <div className="text-xs text-gray-600 mb-4">
                                Rp {priceRange[0].toLocaleString('id-ID')} - Rp{" "}
                                {priceRange[1].toLocaleString('id-ID')}
                            </div>

                            <Slider
                                min={DEFAULT_PRICE_RANGE[0]}
                                max={DEFAULT_PRICE_RANGE[1]}
                                step={DEFAULT_STEP}
                                value={priceRange}
                                onValueChange={([minPrice, maxPrice]) => {
                                    setFilter("price_min", minPrice);
                                    setFilter("price_max", maxPrice);
                                    setPriceRange([minPrice, maxPrice])
                                }}
                                className="w-full"
                            />
                        </>
                    )}
                </div>

                <button className="w-full bg-white border-2 border-[#010e80] text-[#010e80] py-2 rounded font-semibold hover:bg-[#010e80] hover:text-white transition">
                    Apply
                </button>
            </div>
        </aside>
    )
}