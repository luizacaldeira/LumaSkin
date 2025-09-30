import ProductList from "./ProductList"
import { getAllProducts } from "@/lib/products";

export default async function ProductListWrapper() {
    const dbProducts = await getAllProducts();
    return <ProductList products={dbProducts} />;
}
