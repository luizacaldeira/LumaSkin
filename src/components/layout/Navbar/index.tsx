'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, Home, Contact, ShoppingBasket, Settings } from 'lucide-react';

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const navbarData = {
        logoSrc: "lumaSkin.svg",
        navItems: [
            { id: 'home', label: 'Home', path: '/', icon: <Home /> },
            { id: 'contact', label: 'Contact', path: '/contact', icon: <Contact /> },
            { id: 'products', label: 'Products', path: '/products', icon: <ShoppingBasket /> },
            { id: 'management', label: 'Management', path: '/management', icon: <Settings /> },
        ],
        loginButton: (
            <button className="bg-[#59467A] text-[#F1EDF9] px-4 py-1 rounded-2xl hover:bg-[#493a64] transition-colors cursor-pointer uppercase">
                Login
            </button>
        )
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#D9C7EA] flex items-center justify-between px-6 z-100">
            <div className='hidden md:flex w-full justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <img 
                        src={navbarData.logoSrc} 
                        alt="Luma Skin" 
                        className="h-10 sm:h-12 md:h-14 lg:h-16"
                    /> 
                    <div className="flex gap-4 lg:gap-7 uppercase text-[#59467A] text-xs lg:text-sm">
                        {navbarData.navItems.map((item, index) => (
                            <div key={item.id} className="flex items-center gap-2 lg:gap-7 ">
                                <a href={item.path} className='hover:text-[#3a2f50] hover:scale-102 transition-all'>
                                    {item.label}
                                </a>
                                {index < navbarData.navItems.length - 1 && (
                                    <div className="w-px h-4 bg-[#59467A] opacity-30"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                    <a href='/login' className='cursor-pointer'>{navbarData.loginButton}</a>
                    <a href="/cart">
                        <div className="flex h-full w-full items-center cursor-pointer transition-colors">
                            <ShoppingCart size={25} color="#59467A" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between w-full">
                <img 
                    src={navbarData.logoSrc} 
                    alt="Luma Skin" 
                    className="h-12"
                />
                <div className="flex items-center gap-4">
                    <a href="/cart">
                        <div>
                            <ShoppingCart size={24} color="#59467A" />
                        </div>
                    </a>
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
                        {navbarData.navItems.map((item) => (
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
                            {navbarData.loginButton}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}