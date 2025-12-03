'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeroSectionProps {
    title: string;
    subtitle: string;
}
export default function HeroSection(props: HeroSectionProps) {
    const router = useRouter();
    return (
        <div className="flex flex-col md:flex-row justify-between pt-6 h-fit text-[#59467A] animated-hero-gradient">
            <div className="flex flex-col justify-center w-full gap-4 px-4 md:px-13 py-10">
                <div className="text-4xl lg:text-6xl 2xl:text-7xl font-radley italic animate-fade-right">
                    {props.title}
                </div>
                <div className="text-xs lg:text-sm 2xl:text-lg animate-fade-right animate-delay-100">
                    {props.subtitle}
                </div>
                <div>
                    <button
                        className="cursor-pointer rounded-full bg-[#F1EDF9] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 text-sm sm:text-base md:text-lg lg:text-xl font-radley italic shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#493a64] hover:shadow-md animate-fade-right animate-delay-200"
                        onClick={() => router.push("/products")}
                    >
                        <p>see more</p>
                    </button>
                </div>
            </div>

            <div className="relative w-full h-60 md:h-80 lg:h-100 2xl:h-120 overflow-hidden">
                
                <Image
                    src="/ramo1.png"
                    alt="Decorative branch"
                    height={200}
                    width={200}
                    loading="lazy"
                    className="absolute top-0 -left-15 md:-left-11 2xl:-left-10 h-80 md:h-90 lg:h-120 2xl:h-150 object-contain rotate-12 animate-fade-up animate-once animate-duration-1500 animate-ease-out"
                />

                <div className="animate-wiggle animate-infinite animate-duration-[25000ms]">
                    <Image
                        src="/serumhero.png"
                        alt="Serum product"
                        height={300}
                        width={300}
                        priority
                        className="absolute top-5 md:top-25 lg:top-20 2xl:top-25 -left-4 md:-left-5 lg:left-9 2xl:left-23 h-50 md:h-55 lg:h-80 2xl:h-90 object-contain -rotate-[20deg] animate-fade-down animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-out animate-slowFloat"
                    />
                </div>

                <div className="animate-wiggle animate-infinite animate-duration-[25000ms] animate-delay-100 animate-reverse">
                    <Image
                        src="/tampa.png"
                        alt="Product cap"
                        height={250}
                        width={250}
                        loading="lazy"
                        className="absolute top-3 md:top-15 lg:top-17 2xl:top-18 left-28 md:left-26 lg:left-52 2xl:left-80 h-20 md:h-22 lg:h-32 2xl:h-40 z-98 object-contain animate-fade-right animate-duration-1500 animate-delay-[20ms] animate-ease-out animate-slowFloat"
                    />
                </div>

                <div className="animate-wiggle animate-infinite animate-duration-[28000ms] animate-delay-100 animate-reverse">
                    <Image
                        src="/creamtampa.png"
                        alt="Cream cap"
                        height={260}
                        width={260}
                        loading="lazy"
                        className="absolute top-22 md:top-37 lg:top-45 2xl:top-55 left-35 md:left-33 lg:left-65 2xl:left-94 h-25 md:h-27 lg:h-40 2xl:h-50 z-98 object-contain animate-fade-left animate-duration-1500 animate-delay-[25ms] animate-ease-out animate-slowFloat"
                    />
                </div>

                <Image
                    src="/ramo2.png"
                    alt="Decorative branch"
                    height={400}
                    width={400}
                    loading="lazy"
                    className="absolute -top-40 md:-top-30 lg:-top-40 2xl:-top-50 -right-50 md:-right-40 lg:-right-10 2xl:-right-17 h-100 lg:h-120 2xl:h-170 z-0 -rotate-[170deg] md:-rotate-[210deg] object-contain animate-fade-up animate-duration-1500 animate-delay-[30ms] animate-ease-out animate-slowFloat"
                />
            </div>
        </div>
    );
}
