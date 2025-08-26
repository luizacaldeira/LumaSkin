'use client';

import { FooterProps } from "./types";

export default function Footer({ phone, socialLinks, logoSrc, copyright }: FooterProps) {
    return (
        <footer className="flex flex-col md:flex-row w-full items-center justify-between text-[#59467A] bg-[#D9C7EA] px-4 sm:px-8 md:px-15 py-4 md:py-0 gap-4 md:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                <div className="flex items-center gap-2">
                    {phone.icon}
                    <span className="text-sm sm:text-base">{phone.number}</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-[#59467A] mx-4"></div>
                <div className="flex gap-3 sm:gap-5">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} className="hover:text-[#3a2f50]">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex order-first md:order-none">
                <img src={logoSrc} alt="Logo" className="h-16 sm:h-20 md:h-30" />
            </div>
            <div className="text-center md:text-left">
                <span className="text-xs sm:text-sm md:text-base">{copyright}</span>
            </div>
        </footer>
    );
}
