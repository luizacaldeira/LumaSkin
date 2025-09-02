import { Suspense } from "react";
import SearchBox from "@/src/components/ui/SearchBox";
import ProductListWrapper from "@/src/features/products-page/ProductList/ProductListWrapper";

function ProductsPageContent() {
    return (
        <div className="flex flex-col p-5 gap-5 py-12">
            <div className="flex w-full"><SearchBox /></div>
            <ProductListWrapper/>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Carregando produtos...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}
