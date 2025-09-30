'use client';

import { Edit, Eye, Trash, PlusIcon } from "lucide-react";
import { ProductListProps } from "@/components/product-cards/types";
import { usePagination } from "@/hooks/usePagination";
import CustomPagination, { getPaginationIndices } from "@/components/ui/CustomPagination";
import Dialog from '@/components/dialog';
import { useProductManager } from "@/hooks/useProductManager";
import { useRouter } from "next/navigation";

export default function ManagementPage({ products }: ProductListProps) {
    const router = useRouter();
    const { currentPage, handlePageChange } = usePagination();
    const { startIndex, endIndex, totalPages } = getPaginationIndices(currentPage,8, products.length);
    const currentProducts = products.slice(startIndex, endIndex);

    const refreshProducts =  () => {
        router.refresh();
    }

    const {
        dialogOpen,
        dialogType,
        selectedProduct,
        formData,
        error,
        handleView,
        handleEdit,
        handleDelete,
        handleCreate,
        handleImageChange,
        closeDialog,
        handleSubmit,
        setFormData,
    } = useProductManager(refreshProducts);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4 sm:px-8 md:px-16 lg:px-20">
            <div className="w-full max-w-6xl">
                <div className="w-full overflow-x-auto mb-8 bg-white rounded-lg">
                    <div className="flex justify-end mb-4">
                        <button className="flex items-center gap-2 cursor-pointer bg-[#D9C7EA] hover:bg-[#b199c7] text-[#3a2f50] font-bold py-2 px-4 rounded-full transition-all duration-300"
                        onClick={handleCreate}>
                            <PlusIcon />
                            Create Product
                        </button>
                    </div>
                    <table className="w-full min-w-[600px] table-fixed border-collapse border-[#D9C7EA] border">
                        <thead>
                            <tr className="bg-[#D9C7EA] text-left text-[#3a2f50] font-bold uppercase text-sm">
                                <th className="w-16 sm:w-20 py-3 px-2 sm:px-4 text-xs sm:text-sm">ID</th>
                                <th className="w-24 sm:w-32 py-3 px-2 sm:px-4 text-xs sm:text-sm">Product</th>
                                <th className="w-32 sm:w-40 py-3 px-2 sm:px-4 text-xs sm:text-sm">Description</th>
                                <th className="w-20 sm:w-24 py-3 px-2 sm:px-4 text-right text-xs sm:text-sm">Price</th>
                                <th className="w-24 sm:w-28 py-3 px-2 sm:px-4 text-center text-xs sm:text-sm">Actions</th>
                            </tr>
                        </thead>
                    <tbody>
                        {currentProducts.length > 0 ? (
                            currentProducts.map((product, index) => (
                                <tr key={product.id} className="border-b border-[#D9C7EA] hover:bg-gray-50/30 transition-colors">
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">{product.id}</td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium">{product.title}</td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600">
                                        <div className="truncate" title={product.description || undefined}>
                                            {product.description}
                                        </div>
                                    </td>
                                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right font-medium">${product.price}</td>
                                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                                        <div className="flex justify-center gap-2 sm:gap-4">
                                            <Eye 
                                                size={16} 
                                                className="sm:w-5 sm:h-5 text-[#59467A] hover:text-[#3a2f50] cursor-pointer transition-colors" 
                                                onClick={() => handleView({
                                                    ...product,
                                                })}
                                            />
                                            <Edit 
                                                size={16} 
                                                className="sm:w-5 sm:h-5 text-[#59467A] hover:text-[#3a2f50] cursor-pointer transition-colors"
                                                onClick={() => handleEdit({
                                                    ...product,
                                                })}
                                            />
                                            <Trash 
                                                size={16} 
                                                className="sm:w-5 sm:h-5 text-[#59467A] hover:text-[#3a2f50] cursor-pointer transition-colors"
                                                onClick={() => handleDelete({
                                                    ...product,
                                                })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="py-8 text-center text-gray-500">
                                    Nenhum produto encontrado
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={products.length}
                itemsPerPage={8}
                onPageChange={(page) => handlePageChange(page, 'management')}
            />

            {dialogOpen && (
                <Dialog
                    type={dialogType}
                    product={selectedProduct || undefined}
                    onClose={closeDialog}
                    onSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    error={error}
                    handleImageChange={handleImageChange}
                />
            )}
        </div>
        </div>
    );
}  
