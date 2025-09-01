
import HeroSection from '../features/home/HeroSection';
import ProductCarouselWrapper from '../features/home/ProductCarousel/ProductCarouselWrapper';
import AboutUsWrapper from '../features/home/AboutUs/AboutUsWrapper';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection title="your skin, your light, everyday." subtitle="Discover the perfect blend of nature and science with our skincare products. At Luma Skin, we combine advanced dermatological research with the purest botanical ingredients to deliver visible results and long-lasting skin health." />
      <ProductCarouselWrapper />
      <AboutUsWrapper />
    </div>
  );
}
