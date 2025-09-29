import ProductCarousel from './ProductCarousel';
import { getProducts } from '../../../lib/products';

export default async function ProductCarouselWrapper() {
    const dbProducts = await getProducts(6);
    return <ProductCarousel products={dbProducts} />;
}
