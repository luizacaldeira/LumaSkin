
interface CartSummaryProps {
    totalItems: number;
    totalPrice: number;
}


export default function CartSummary({ totalItems, totalPrice }: CartSummaryProps){
    return(
        <div className='flex p-5 w-1/3 bg-[#d9c7ea4d] rounded-2xl'>
            <div className='flex flex-col w-full h-full p-5 px-10 text-md justify-between'>
                <div className='flex flex-col'>
                    <p className="text-2xl md:text-3xl mb-4 text-[#59467A] font-radley italic">summary</p>
                    <div className='flex justify-between mb-2'>
                        <span>Total Items:</span>
                        <span>{totalItems}</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <span>Total Price:</span>
                        <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button className='mt-4 bg-[#59467A] text-white py-2 px-4 rounded-lg cursor-pointer'>Checkout</button>
                </div>
            </div>
        </div>
    );
}