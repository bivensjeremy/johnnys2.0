'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { Pagination } from '@heroui/pagination';

const PaginationComp = ({ paginationData }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // const [currentPage, setCurrentPage] = useState(paginationData.current_page);
    const [currentPage, setCurrentPage] = useState(1);
    const { push } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString());
        push(`${pathname}?${params.toString()}`);
    }, [currentPage])

    return (
        <div className="flex justify-center py-6">
            <Pagination
                total={paginationData / 5}
                // total={paginationData.total_pages}
                // page={paginationData.current_page}
                classNames={{
                    wrapper: 'gap-2'
                }}
                onChange={setCurrentPage}
            />
        </div>
    );
}

export default PaginationComp;