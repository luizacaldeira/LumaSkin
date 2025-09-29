'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const currentSearch = searchParams.get('search') || '';
        setSearchTerm(currentSearch);
    }, [searchParams]);

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        
        if (searchTerm.trim()) {
            params.set('search', searchTerm);
        } else {
            params.delete('search');
        }
        
        router.push(`/products?${params.toString()}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='flex bg-[#493a64] w-100 p-1 rounded-3xl pl-5'>
            <input 
                className='w-full text-[#F1EDF9] focus-visible:outline-none bg-transparent placeholder-[#F1EDF9]/70' 
                type="text" 
                placeholder="Search skincare products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button 
                onClick={handleSearch}
                className='flex items-center rounded-full bg-[#F1EDF9] text-[#493a64] p-2 hover:bg-[#F1EDF9]/90 transition-colors cursor-pointer'
            >
                <Search />
            </button>
        </div>
    );
}