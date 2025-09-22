'use client'
import { ProductCard } from "@/src/components/product-cards/ProductCard";
import { ProductListProps} from "@/src/components/product-cards/types";
import { usePagination } from "@/src/hooks/usePagination";
import CustomPagination from "@/src/components/ui/CustomPagination";
import { getPaginationIndices } from "@/src/components/ui/CustomPagination";

export default function ProductList({ products }: ProductListProps) {
    const { currentPage, handlePageChange } = usePagination();
    const { startIndex, endIndex, totalPages } = getPaginationIndices(currentPage, 8, products.length);
    const currentProducts = products.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {currentProducts.map((product, index) => (
                    <ProductCard key={startIndex + index} {...product} />
                ))}
            </div>
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={products.length}
                itemsPerPage={8}
                onPageChange={(page) => handlePageChange(page, 'products')}
            />
        </div>
    );
}
