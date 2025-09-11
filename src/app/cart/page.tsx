import React from 'react';
import { X } from 'lucide-react';
import CartItem from '@/src/components/cart-item';

export default function CartPage() {
    return (
        <div className='flex h-full'> 
            <div className='flex flex-col mt-10 w-full p-5'>
                <p className="text-4xl md:text-5xl mb-8 text-[#59467A] font-radley italic pl-10">shopping cart</p>
                <div className='flex w-full gap-20 px-10 items-start'>
                    <div className='flex flex-col gap-5 w-full'>
                        <CartItem productName='Ceramide Repair Cream' variant='100ml' price={42.99} />
                        <CartItem productName='Soothing Face Balm' variant='50ml' price={39.99} />
                    </div>
                    <div className='flex p-5 w-1/3 bg-[#d9c7ea4d] border-l-1 border-[#59467a3f] rounded-2xl'>
                        <div className='flex flex-col w-full h-full p-5 px-10 text-md justify-between'>
                            <div className='flex flex-col'>
                                <p className="text-2xl md:text-3xl mb-4 text-[#59467A] font-radley italic">summary</p>
                                <div className='flex justify-between mb-2'>
                                    <span>Total Items:</span>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between mb-2'>
                                    <span>Total Price:</span>
                                    <span>R$ 00,00</span>
                                </div>
                                <button className='mt-4 bg-[#59467A] text-white py-2 px-4 rounded-lg'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
