'use client'
import { CarouselCard } from "@/src/components/product-cards/CarouselCard";
import { ProductCardProps } from "@/src/components/product-cards/types";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type ProductCarouselProps = {
    products: ProductCardProps[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-12 bg-[#f9fafb]">
            <div className="container mx-auto px-4">
                <p className="pl-18 text-4xl md:text-5xl mb-8 text-[#59467A] font-radley italic">our products</p>
                <div className="relative">
                    <button
                        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-[#59467A] shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            !canScrollPrev
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-[#d9c7ea44] hover:shadow-xl hover:scale-105'
                        }`}
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden mx-16" ref={emblaRef}>
                        <div className="flex">
                            {products.map((product, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-2 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <CarouselCard 
                                        title={product.title} 
                                        imageUrl={product.imageUrl} 
                                        price={product.price}
                                        description={product.description}
                                        benefits={product.benefits}
                                        variant={product.variant}
                                        buttonText="see more" 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-[#59467A] shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            !canScrollNext 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:bg-[#d9c7ea44]  hover:shadow-xl hover:scale-105'
                        }`}
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}