"use client"
import { Spinner } from '@/components/button-with-loading.component';
import EmptyProperty from '@/features/public/components/empty-property.component';
import PropertyCard from '@/features/public/components/property-card.component';
import SidebarFilter from '@/features/public/components/sidebar-filter.component';
import Sort from '@/features/public/components/sort.component';
import { useInfiniteProperties } from '@/features/public/hooks/use-find-properties.hook';
import { useFilters } from '@/hooks/use-filters.hook';
import { useQueryParam } from '@/hooks/use-query-param';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from 'use-debounce';

export default function PageClient() {
    const { setParams } = useQueryParam();

    const searchParams = useSearchParams();
    const { setFilter, filters, resetFilter } = useFilters<PropertySearchParams>({
        initialValues: {
            per_page: 0,
            price_max: 0,
            price_min: 0,
            status: [],
            location: [],
            type: []
        },
        onChange: (filters) => {
            setParams(filters);
        },
    });

    const [debounceFilters] = useDebounce(filters, 300);

    const {
        data,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteProperties(debounceFilters);

    const properties =
        data?.pages.flatMap((page) => page.data.data) ?? [];

    useEffect(() => {
        resetFilter({
            per_page: Number(searchParams.get("per_page")) || 0,
            price_min: Number(searchParams.get("price_min")) || 0,
            price_max: Number(searchParams.get("price_max")) || 0,
            status: searchParams.get("status")?.split(",") || [],
            location: searchParams.get("location")?.split(",") || [],
            type: searchParams.get("type")?.split(",") || [],
        }
        );
    }, [])

    return (
        <div>
            {/* Main Content */}
            <div className="h-full mx-auto px-4 sm:px-6 lg:px-24 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filter */}
                    <SidebarFilter filters={filters} setFilter={setFilter} />

                    {/* Property Listings */}
                    <main className="flex-1">
                        {/* Sort */}
                        <Sort />

                        {/* Property Grid */}
                        {properties?.length > 0 ?
                            <div className='flex justify-center items-center'>
                                <InfiniteScroll
                                    dataLength={properties?.length}
                                    next={fetchNextPage}
                                    hasMore={!!hasNextPage}
                                    loader={<div className='flex justify-center w-full bottom-0 absolute'>
                                        <Spinner className="border-primary" size='medium' />
                                    </div>}
                                    className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'
                                >
                                    {properties?.map((property) => (

                                        <PropertyCard key={property.id} property={property} />
                                    ))}
                                </InfiniteScroll>

                            </div>
                            :
                            <EmptyProperty />
                        }

                    </main>
                </div>
            </div>
        </div>
    );
}
