'use client'
import { ProductCard } from "@/src/components/product-cards/ProductCard";
import { ProductListProps} from "@/src/components/product-cards/types";
import { usePagination } from "@/src/hooks/usePagination";
import CustomPagination from "@/src/components/ui/CustomPagination";
import { getPaginationIndices } from "@/src/components/ui/CustomPagination";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBox from "@/src/components/ui/SearchBox";

export default function ProductList({ products }: ProductListProps) {
    const { currentPage, handlePageChange } = usePagination();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    
    // Filtrar produtos baseado na busca
    const filteredProducts = searchQuery 
        ? products.filter(product => 
            product.title?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : products;
    
    const { startIndex, endIndex, totalPages } = getPaginationIndices(currentPage, 8, filteredProducts.length);
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    const router = useRouter();

    const handleButtonClick = (productId: number) => {
        router.push('/individual-product/' + productId);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex w-full py-7">
                <SearchBox />
            </div>
            
            {searchQuery && (
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#59467A] mb-2">
                        Search results for: "{searchQuery}"
                    </h2>
                    <p className="text-[#59467A]/70">
                        {filteredProducts.length} product(s) found
                    </p>
                </div>
            )}

            {filteredProducts.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {currentProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                onButtonClick={() => handleButtonClick(product.id)}
                            />
                        ))}
                    </div>
                    
                    {totalPages > 1 && (
                        <CustomPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            totalItems={filteredProducts.length}
                            itemsPerPage={8}
                            onPageChange={(page) => handlePageChange(page, 'products')}
                        />
                    )}
                </>
            ) : (
                <div className="text-center py-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                        <h3 className="text-xl font-semibold text-[#59467A] mb-2">
                            No products found
                        </h3>
                        <p className="text-[#59467A]/70 mb-4">
                            We couldn't find any products for "{searchQuery}"
                        </p>
                        <button
                            onClick={() => router.push('/products')}
                            className="bg-[#59467A] text-white px-6 py-2 rounded-lg hover:bg-[#493a64] transition-colors"
                        >
                            View all products
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}