'use client';

import { useState } from 'react';
import { 
    Home, 
    Settings,
    LogOut,
    Menu,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const sidebarData = {
        menuItems: [
            {
                id: 'home',
                label: 'Home',
                path: '/',
                icon: <Home size={20} />,
                badge: null
            },
            {
                id: 'management',
                label: 'Management',
                path: '/management',
                icon: <Settings size={20} />,
                badge: null
            },
            {
                id: 'logout',
                label: 'Logout',
                path: '/',
                icon: <LogOut size={20} />,
                badge: null
            }
        ]
    };

    return (
        <>
            <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#59467A] text-white rounded-md shadow-lg"
            >
                <Menu size={24} />
            </button>

            {isMobileOpen && (
                <div 
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={`
                fixed top-0 left-0 h-full bg-[#F1EDF9] border-r border-[#D9C7EA] z-40
                transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64' : 'w-16'}
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-[#D9C7EA]">
                    {isOpen && (
                    <div className="flex items-center gap-3">
                        <img src="lumaSkin.svg" alt="Luma Skin" className="h-8 w-8" />
                        <span className="font-semibold text-[#59467A] whitespace-nowrap">Luma Skin</span>
                    </div>
                    )}
                    
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hidden lg:flex p-1 rounded-md hover:bg-[#D9C7EA] text-[#59467A]"
                    >
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>

                    <button
                    onClick={() => setIsMobileOpen(false)}
                    className="lg:hidden p-1 rounded-md hover:bg-[#D9C7EA] text-[#59467A]"
                    >
                    <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {sidebarData.menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.path}
                        className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg
                        text-[#59467A] hover:bg-[#D9C7EA] hover:text-[#3a2f50]
                        transition-colors duration-200
                        ${!isOpen ? 'justify-center' : ''}
                        `}
                        title={!isOpen ? item.label : undefined}
                        onClick={item.id === 'logout' ? (e) => {
                        e.preventDefault();
                        window.location.href = '/';
                        } : undefined}
                    >
                        <span className="flex-shrink-0">
                        {item.icon}
                        </span>
                        
                        {isOpen && (
                        <>
                            <span className="flex-1 font-medium">{item.label}</span>
                            {item.badge && (
                            <span className="bg-[#59467A] text-white text-xs px-2 py-1 rounded-full">
                                {item.badge}
                            </span>
                            )}
                        </>
                        )}
                    </a>
                    ))}
                </nav>

                <div className="p-4 border-t border-[#D9C7EA]">
                    {isOpen ? (
                    <div className="text-center">
                        <p className="text-xs text-[#59467A]/70">
                        © 2025 Luma Skin
                        </p>
                    </div>
                    ) : (
                    <div className="flex justify-center">
                        <div className="w-8 h-1 bg-[#D9C7EA] rounded-full" />
                    </div>
                    )}
                </div>
                </div>
            </aside>
            <div className={`
                hidden lg:block transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64' : 'w-16'}
            `} />
        </>
    );
}
