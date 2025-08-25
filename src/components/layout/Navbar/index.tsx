'use client';

import {NavbarProps} from './types';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ logoSrc, navItems, loginButton, cartIcon }: NavbarProps) {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#D9C7EA] flex items-center justify-between px-6">
            <div className='hidden md:flex w-full justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <img 
                        src={logoSrc} 
                        alt="Luma Skin" 
                        className="h-10 sm:h-12 md:h-14 lg:h-16"
                    /> 
                    <div className="flex gap-4 lg:gap-7 uppercase text-[#59467A] text-xs lg:text-sm">
                        {navItems.map((item, index) => (
                            <div key={item.id} className="flex items-center gap-2 lg:gap-7 ">
                                <a href={item.path} className='hover:text-[#3a2f50] hover:scale-102 transition-all'>
                                    {item.label}
                                </a>
                                {index < navItems.length - 1 && (
                                    <div className="w-px h-4 bg-[#59467A] opacity-30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                    {loginButton}
                    {cartIcon}
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between w-full">
                <img 
                    src={logoSrc} 
                    alt="Luma Skin" 
                    className="h-12"
                />
                <div className="flex items-center gap-4">
                    {cartIcon}
                    <button 
                        onClick={() => setShowMobileNav(!showMobileNav)}
                        className="p-2 text-[#59467A] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {showMobileNav ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {showMobileNav && (
                <div className="fixed top-12 left-0 right-0 bg-[#D9C7EA] md:hidden z-40 shadow-lg border-t border-[#59467A] border-opacity-20 rounded-b-lg">
                    <div className="flex flex-col py-4 px-6">
                        {navItems.map((item) => (
                            <a 
                                key={item.id} 
                                href={item.path} 
                                className="flex items-center gap-3 text-[#59467A] text-sm px-2 py-3 border-b border-[#59467A] last:border-b-0 uppercase"
                                onClick={() => setShowMobileNav(false)}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </a>
                        ))}
                        <div className="pt-4 mt-2" onClick={() => setShowMobileNav(false)}>
                            {loginButton}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}