'use client'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/src/components/ui/pagination";
import { start } from "repl";


interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export const getPaginationIndices = (currentPage: number, itemsPerPage: number, totalItems: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return { startIndex, endIndex, totalPages };
}

export default function CustomPagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange
}: CustomPaginationProps) {

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                            <PaginationLink
                                onClick={() => onPageChange(page)}
                                isActive={page === currentPage}
                                className="cursor-pointer"
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                        <PaginationNext 
                            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            
            <div className="text-center text-sm text-gray-600">
                Showing {getPaginationIndices(currentPage, itemsPerPage, totalItems).startIndex + 1}-{getPaginationIndices(currentPage, itemsPerPage, totalItems).endIndex} of {totalItems} products
            </div>
        </div>
    );
}