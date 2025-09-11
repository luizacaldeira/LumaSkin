import { ProductCardProps } from "@/src/components/product-cards/types";
import {Lamp, Lightbulb} from "lucide-react"

export default function IndividualProduct(props: ProductCardProps) {
    const product ={
        title: 'Ceramide Repair Cream',
        description: 'Barrier-repairing cream with ceramides for sensitive skin.',
        benefits: 'Repairs skin barrier, soothes irritation, long-lasting moisture',
        imageUrl: '/cream.png',
        price: 42.99,
        variant: ['100ml'],
        buttonText: 'Add to Cart',
    }
    return(
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex items-center bg-[#d9c7eabe] justify-center text-[#201324] w-fit p-10 rounded-2xl gap-10">
                <div className="h-full">
                    <img src={product.imageUrl} alt={product.title} className="h-100"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-radley text-4xl mb-3">{product.title}</p>
                    <p className="pl-1">{product.description}</p>
                    <div className="flex">
                        <Lightbulb />
                        {product.benefits}
                    </div>
                    <p className="pl-1 font-bold text-2xl text-[#312742b6]">R$ {product.price}</p>
                    <p>{product.variant.join(', ')}</p>
                    <button className="bg-[#312742] hover:bg-[#3e3153] text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer transition-all duration-300 hover:scale-101">{product.buttonText}</button>
                </div>
            </div>
        </div>
    );
}