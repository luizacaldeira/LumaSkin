'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle: string;
}
export default function HeroSection(props: HeroSectionProps){
    const router = useRouter();
    return(
        <div className="flex flex-col md:flex-row justify-between animated-hero-gradient h-fit text-[#59467A]">
            <div className=" flex flex-col w-full gap-4 justify-center px-4 md:px-13 py-10">
                <div className="text-4xl lg:text-6xl 2xl:text-7xl font-radley italic">{props.title}</div>
                <div className="text-xs lg:text-sm 2xl:text-lg">{props.subtitle}</div>
                <div>
                    <button className="bg-[#F1EDF9] font-radley italic text-sm sm:text-base md:text-lg lg:text-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full cursor-pointer hover:text-[#493a64] hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                    onClick={() => router.push("/products")}
                    >see more</button>
                </div>
            </div>
            <div className="relative w-full h-60 md:h-90 lg:h-100 2xl:h-120 overflow-hidden">
                <Image 
                    src="/ramo1.png" 
                    alt="Decorative branch" 
                    height={200}
                    width={200}
                    className="absolute top-0 -left-15 md:-left-15 object-contain rotate-12 
                    h-80 md:h-90 lg:h-120 2xl:h-150
                    animate-fade-up animate-once animate-duration-1000 animate-ease-out"
                    loading="lazy"
                />
                <Image 
                    src="/serumhero.png" 
                    alt="Serum product" 
                    height={300}
                    width={300}
                    className="absolute top-5 md:top-25 lg:top-25 2xl:top-25
                    -left-4 md:-left-5 lg:left-9 2xl:left-23
                    h-50 md:h-55 lg:h-70 2xl:h-90
                    object-contain 
                    -rotate-[20deg] 
                    animate-fade-down animate-once animate-duration-800 animate-delay-[10ms] animate-ease-out"
                    priority
                    />  
                <Image 
                    src="/tampa.png" 
                    alt="Product cap" 
                    height={250}
                    width={250}
                    className="absolute 
                    top-0 md:top-15 lg:top-15 2xl:top-13
                    left-25 md:left-26 lg:left-50 2xl:left-80
                    h-20 md:h-22 lg:h-30 2xl:h-40
                    
                    object-contain animate-fade-right animate-duration-1000 animate-delay-[20ms] animate-ease-out"
                    loading="lazy"
                />
                <Image  
                    src="/creamtampa.png" 
                    alt="Cream cap" 
                    height={260}
                    width={260}
                    className="absolute
                    top-20 md:top-37 lg:top-45 2xl:top-55             
                    left-30 md:left-33 lg:left-60 2xl:left-94
                    h-25 md:h-27 lg:h-38 2xl:h-50
                    object-contain animate-fade-left animate-duration-1000 animate-delay-[25ms] animate-ease-out"
                    loading="lazy"
                />
                <Image 
                    src="/ramo2.png" 
                    alt="Decorative branch" 
                    height={300}
                    width={300}
                    className="absolute 
                    -top-40 md:-top-20 lg:-top-15
                    -right-45 md:-right-35 lg:-right-0 
                    -rotate-[160deg] md:-rotate-[220deg]
                    object-contain animate-fade-up animate-duration-1000 animate-delay-[30ms] animate-ease-out"
                    loading="lazy"
                />
            </div>
        </div>
    );
}