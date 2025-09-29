import { Suspense } from "react";
import SearchBox from "@/src/components/ui/SearchBox";
import ProductListWrapper from "@/src/features/products-page/ProductList/ProductListWrapper";

function ProductsPageContent() {
    return (
        <ProductListWrapper/>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Carregando produtos...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}
