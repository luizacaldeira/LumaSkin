import { ProductCardProps } from "@/src/components/product-cards/types";
import ProductList from "./ProductList"
import { getProducts } from "@/src/lib/products";
import { ImageOff } from "lucide-react";

export default async function ProductListWrapper() {
    const dbProducts = await getProducts(undefined);
    const products: ProductCardProps[] = dbProducts.map((product) => ({
        title: product.title,
        description: product.description || undefined,
        benefits: product.benefits || undefined,
        price: product.price,
        imageUrl: product.imageUrl || undefined,
        variant: product.variant || [],
        buttonText: 'see more',
        imageFallback: !product.imageUrl ? <ImageOff size={32} /> : undefined
    }));
    return <ProductList products={products} />;
}
