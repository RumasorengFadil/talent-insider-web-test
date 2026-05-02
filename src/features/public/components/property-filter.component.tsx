import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

type ExpandedSections = {
    status: boolean;
    location: boolean;
    type: boolean;
    priceRange: boolean;
};

type SidebarFilterProps = {
    expandedSections: ExpandedSections;
    toggleSection: (key: keyof ExpandedSections) => void;

    selectedStatus: string[];
    setSelectedStatus: React.Dispatch<React.SetStateAction<string[]>>;

    selectedLocations: string[];
    setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;

    selectedTypes: string[];
    setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;

    priceRange: number[];
    setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function PropertyFilter({
    expandedSections,
    toggleSection,

    selectedStatus,
    setSelectedStatus,

    selectedLocations,
    setSelectedLocations,

    selectedTypes,
    setSelectedTypes,

    priceRange,
    setPriceRange,
}: SidebarFilterProps) {

    const renderCheckboxGroup = (
        items: string[],
        selected: string[],
        setSelected: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        return items.map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={selected.includes(item)}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setSelected([...selected, item]);
                        } else {
                            setSelected(selected.filter((i) => i !== item));
                        }
                    }}
                    className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">{item}</span>
            </label>
        ));
    };

    const FilterSection = ({
        title,
        sectionKey,
        children,
    }: {
        title: string;
        sectionKey: keyof ExpandedSections;
        children: React.ReactNode;
    }) => (
        <div className="mb-6">
            <button
                onClick={() => toggleSection(sectionKey)}
                className="flex items-center justify-between w-full mb-3 font-semibold text-sm hover:text-[#ec0e52] transition"
            >
                {title}
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                        expandedSections[sectionKey] ? "rotate-180" : ""
                    }`}
                />
            </button>

            {expandedSections[sectionKey] && children}
        </div>
    );

    return (
        <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <h2 className="font-bold mb-4">FILTER BY</h2>

                {/* STATUS */}
                <FilterSection title="Status" sectionKey="status">
                    <div className="space-y-2">
                        {renderCheckboxGroup(
                            ["New", "Second"],
                            selectedStatus,
                            setSelectedStatus
                        )}
                    </div>
                </FilterSection>

                {/* LOCATION */}
                <FilterSection title="Location" sectionKey="location">
                    <div className="space-y-2">
                        {renderCheckboxGroup(
                            ["Bekasi", "Jakarta", "Bandung", "Bogor"],
                            selectedLocations,
                            setSelectedLocations
                        )}
                    </div>
                </FilterSection>

                {/* TYPE */}
                <FilterSection title="Type" sectionKey="type">
                    <div className="space-y-2">
                        {renderCheckboxGroup(
                            ["Rumah", "Apartement", "Ruko", "Hotel"],
                            selectedTypes,
                            setSelectedTypes
                        )}
                    </div>
                </FilterSection>

                {/* PRICE */}
                <FilterSection title="Price Range" sectionKey="priceRange">
                    <>
                        <div className="text-xs text-gray-600 mb-4">
                            Rp {priceRange[0].toLocaleString("id-ID")} - Rp{" "}
                            {priceRange[1].toLocaleString("id-ID")}
                        </div>

                        <Slider
                            min={4000000}
                            max={8000000}
                            step={100000}
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value)}
                            className="w-full"
                        />
                    </>
                </FilterSection>

                <button className="w-full bg-white border-2 border-[#010e80] text-[#010e80] py-2 rounded font-semibold hover:bg-[#010e80] hover:text-white transition">
                    Apply
                </button>
            </div>
        </aside>
    );
}