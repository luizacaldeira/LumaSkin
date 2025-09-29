import ProductCarousel from './ProductCarousel';
import { getProducts } from '../../../lib/products';
import { ProductCardProps } from '@/src/components/product-cards/types';

export default async function ProductCarouselWrapper() {
    const dbProducts = await getProducts(6);
    
    const products: ProductCardProps[] = dbProducts.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description ?? '',
        benefits: product.benefits ?? '',
        imageUrl: product.imageUrl ?? '',
        price: product.price,
    })); 
    
    return <ProductCarousel products={products} />;
}
