import { ProductCardProps } from "@/src/components/product-cards/types";
import { getProducts } from "@/src/lib/products";
import { ImageOff } from "lucide-react";
import ManagementPage from "./ManagementPage";

export default async function ManagementPageWrapper() {
    const dbProducts = await getProducts(undefined);
    const products: ProductCardProps[] = dbProducts.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description || '',
        benefits: product.benefits || '',
        price: product.price,
        imageUrl: product.imageUrl || '',
        buttonText: 'see more',
        imageFallback: !product.imageUrl ? <ImageOff size={32} /> : undefined
    }));
    return <ManagementPage products={products} />;
}
