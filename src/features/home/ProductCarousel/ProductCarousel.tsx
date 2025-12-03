'use client'
import { ProductCard } from "@/components/product-cards/ProductCard";
import { ProductListProps } from "@/components/product-cards/types";
import { Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/navigation";
import '../../../app/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





export default function ProductCarousel({ products }: ProductListProps) {

    const router = useRouter();

    const handleButtonClick = (productId: number) => {
        router.push('/individual-product/' + productId);
    };


    return (
        <section className="py-20 bg-[#f9fafb]">
            <div className="container mx-auto px-0 lg:px-4 h-fit">
            <p className="pl-10 text-4xl md:text-5xl mb-8 text-[#59467A] font-radley italic">our products</p>
                <div className="px-4 md:px-8 h-fit">
                    <Swiper
                        speed={2000}
                        grabCursor={true}
                        centeredSlides={true}
                        modules={[Pagination, Autoplay, EffectCoverflow]}
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={{
                            640: { 
                                slidesPerView: 2,
                                spaceBetween: 20 
                            },
                            1024: { 
                                slidesPerView: 3,
                                spaceBetween: 35
                            },
                        }}
                        pagination={{ 
                            clickable: true,
                            el: ".custom-swiper-pagination",
                        }}
                        loop={true}
                        autoplay={{ delay: 50, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate: 8,          // leve inclinação; moderno sem exagero
                            stretch: -10,       // puxa levemente para dentro (sofisticado)
                            depth: 140,         // profundidade suficiente para destacar o central
                            modifier: 1,
                            slideShadows: false // sombra do slide é feia pra produto – desabilite
                        }}
                        className="w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="h-fit">
                                <div className="rounded-lg" onClick={() => handleButtonClick(product.id)}>
                                    <ProductCard
                                        id={product.id}
                                        title={product.title} 
                                        imageUrl={product.imageUrl} 
                                        price={product.price}
                                        description={product.description}
                                        benefits={product.benefits}
                                        customized={true}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-swiper-pagination mt-5"></div>
                </div>
            </div>
        </section>
    );
}