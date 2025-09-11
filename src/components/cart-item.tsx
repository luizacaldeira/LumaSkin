'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';


interface CartItemProps {
    productName: string;
    variant: string;
    price: number;
}

export default function CartItem({ productName, variant, price }: CartItemProps) {
    const [counter, setCounter] = useState(1);
    const [newPrice, setNewPrice] = useState(price);

    function updateQuantity(action: 'increment' | 'decrement') {
        if (action === 'increment') {
            setCounter(counter + 1);
            setNewPrice(price * (counter + 1));
        } else {
            if (counter > 1) {
                setCounter(counter - 1);
                setNewPrice(price * (counter - 1));
            }
        }
    }

    return (
        <div className='flex items-center justify-center gap-5 w-full'>
            <div className='flex bg-[#D9C7EA] rounded-2xl p-2 px-10 justify-between items-center w-full text-md shadow-md text-[#312742]'>
                <img className='h-28' src="/balm.png" />
                <div className='flex flex-col items-center'>
                    <div className='font-bold'>{productName}</div>
                    <div className='uppercase'>{variant}</div>
                </div>
                <div className='flex items-center gap-1 px-1 bg-[#ffffff4d] border-1 border-[#312742] rounded-full justify-center font-bold'>
                    <button className='h-8 w-8 flex items-center justify-center cursor-pointer' onClick={() => updateQuantity('decrement')}> - </button>
                    <div>{counter}</div>
                    <button className='h-8 w-8 flex items-center justify-center cursor-pointer' onClick={() => updateQuantity('increment')}> + </button>
                </div>
                <div className='font-bold'>R$ {newPrice.toFixed(2).replace('.', ',')}</div>
                <X />
            </div>
        </div>
    );
}