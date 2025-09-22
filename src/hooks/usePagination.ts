import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function usePagination() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const pageParam = searchParams.get('page');
        if (pageParam) {
            const page = parseInt(pageParam, 10);
            if (!isNaN(page) && page > 0) {
                setCurrentPage(page);
            }
        }
    }, [searchParams]);

    function handlePageChange(page: number, prefix: string) {
        setCurrentPage(page);
        const params = new URLSearchParams(searchParams);
        if (page === 1) {
            params.delete('page');
        } else {
            params.set('page', page.toString());
        }

        const newUrl = params.toString() ? `?${params.toString()}` : '';
        router.push(`/${prefix}${newUrl}`, { scroll: false });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return {
        currentPage,
        handlePageChange
    };
}
