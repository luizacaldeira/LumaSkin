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
                <div className="text-4xl lg:text-6xl 2xl:text-8xl font-radley italic">{props.title}</div>
                <div className="text-xs lg:text-sm 2xl:text-lg">{props.subtitle}</div>
                <div>
                    <button className="bg-[#F1EDF9] font-radley italic text-sm sm:text-base md:text-lg lg:text-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full cursor-pointer hover:text-[#493a64] hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                    onClick={() => router.push("/products")}
                    >see more</button>
                </div>
            </div>
            <div className="relative w-full h-92 overflow-hidden">
                <Image 
                    src="/ramo1.png" 
                    alt="Decorative branch" 
                    height={200}
                    width={200}
                    className="absolute top-2 -left-8 object-contain rotate-12 animate-fade-up animate-once animate-duration-1000 animate-ease-out"
                    loading="lazy"
                />
                <Image 
                    src="/serumhero.png" 
                    alt="Serum product" 
                    height={230}
                    width={230}
                    className="absolute top-22 left-25 object-contain -rotate-[22deg] animate-fade-down animate-once animate-duration-800 animate-delay-[10ms] animate-ease-out"
                    priority
                    />  
                <Image 
                    src="/tampa.png" 
                    alt="Product cap" 
                    height={150}
                    width={150}
                    className="absolute top-10 left-65 object-contain animate-fade-right animate-duration-1000 animate-delay-[20ms] animate-ease-out"
                    loading="lazy"
                />
                <Image 
                    src="/creamtampa.png" 
                    alt="Cream cap" 
                    height={160}
                    width={160}
                    className="absolute top-40 left-80 object-contain animate-fade-left animate-duration-1000 animate-delay-[25ms] animate-ease-out"
                    loading="lazy"
                />
                <Image 
                    src="/ramo2.png" 
                    alt="Decorative branch" 
                    height={300}
                    width={300}
                    className="absolute -top-20 right-0 object-contain -rotate-[220deg] animate-fade-up animate-duration-1000 animate-delay-[30ms] animate-ease-out"
                    loading="lazy"
                />
            </div>
        </div>
    );
}