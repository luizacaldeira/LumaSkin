import { Suspense } from "react";
import ProductListWrapper from "@/features/products-page/ProductList/ProductListWrapper";

function ProductsPageContent() {
    return (
        <ProductListWrapper/>
    );
}

export default function ProductsPage() {
    return (
        <Suspense>
            <ProductsPageContent />
        </Suspense>
    );
}
