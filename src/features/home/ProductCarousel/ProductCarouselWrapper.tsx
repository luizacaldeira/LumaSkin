import ProductCarousel from './ProductCarousel';
import { getProducts } from '../../../lib/products';
import { ProductCardProps } from '@/src/components/product-cards/types';

export default async function ProductCarouselWrapper() {
    const dbProducts = await getProducts(6);
    const products: ProductCardProps[] = dbProducts.map((product) => ({
        title: product.title,
        description: product.description || undefined,
        benefits: product.benefits || undefined,
        imageUrl: product.imageUrl || '/hero-section-img.png',
        price: product.price,
        variant: product.variant || [],
        buttonText: 'see more'
    })); 
    
    return <ProductCarousel products={products} />;
}
