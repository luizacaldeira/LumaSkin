import React from 'react';
import { X } from 'lucide-react';


interface CartItemProps {
    productName: string;
    variant: string;
    price: number;
}

export default function CartItem({ productName, variant, price }: CartItemProps) {
    return (
        <div className='flex items-center justify-center gap-5 w-full'>
            <div className='flex bg-[#D9C7EA] rounded-2xl p-2 px-10 justify-between items-center w-full text-md shadow-md text-[#312742]'>
                <img className='h-28' src="/balm.png" />
                <div className='flex flex-col items-center'>
                    <div className='font-bold'>{productName}</div>
                    <div className='uppercase'>{variant}</div>
                </div>
                <div className='flex items-center gap-1 px-1 bg-[#ffffff4d] border-1 border-[#312742] rounded-full justify-center font-bold'>
                    <div className='h-8 w-8 flex items-center justify-center cursor-pointer'> - </div>
                    <div>1</div>
                    <div className='h-8 w-8 flex items-center justify-center cursor-pointer'> + </div>
                </div>
                <div className='font-bold'>R$ {price.toFixed(2).replace('.', ',')}</div>
                <X />
            </div>
        </div>
    );
}