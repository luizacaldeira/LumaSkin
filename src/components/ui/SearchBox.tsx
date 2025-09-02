import { Search } from 'lucide-react';

export default function SearchBox() {
    return (
        <div className='flex bg-[#493a64] w-100 p-1 rounded-3xl pl-5'>
            <input 
                className='w-full text-[#F1EDF9] focus-visible:outline-none' 
                type="text" placeholder="Search skincare products..."
            />
            <div className='flex items-center rounded-full bg-[#F1EDF9] text-[#493a64] p-2'>
                <Search />
            </div>
        </div>
    );
}
