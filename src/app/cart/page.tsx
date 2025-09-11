import React from 'react';
import CartItem from '@/src/components/cart-item';
import CartSummary from '@/src/components/cart-summary';

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
                    <CartSummary totalItems={2} totalPrice={82.98} />
                </div>
            </div>
        </div>
    );
}
