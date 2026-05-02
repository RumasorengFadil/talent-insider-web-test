export default function Sort() {
    return (
        <div className="flex justify-end mb-6">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Sort By :</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec0e52]">
                    <option>Most Relevant</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                </select>
            </div>
        </div>
    )
}