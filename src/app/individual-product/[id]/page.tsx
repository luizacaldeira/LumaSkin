import { getProductById } from "@/src/lib/products";
import {ArrowLeft, Lightbulb} from "lucide-react"
import Link from "next/link";

interface IndividualProductProps {
    params: {
        id: string;
    }
}

export default async function IndividualProduct( {params}: IndividualProductProps) {
    const product = await getProductById(parseInt(params.id));
    if (!product) {
        return <div>Product not found</div>;
    }
    return(
        <div className="flex h-screen w-full items-center justify-center">
                <Link 
                    href="/products"
                    className="absolute top-20 left-6 flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
                >
                        <ArrowLeft size={20} />
                        <div>Back to Products</div>
                </Link>
            <div className="flex flex-col items-center bg-[#d9c7eabe] justify-center text-[#201324] w-fit p-10 rounded-2xl gap-10 lg:flex-row">
                <div className="h-full">
                    <img src={product.imageUrl || ''} alt={product.title} className="h-fit object-contain"/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-radley text-4xl mb-3">{product.title}</p>
                    <p className="pl-1">{product.description}</p>
                    <div className="flex">
                        <Lightbulb />
                        {product.benefits}
                    </div>
                    <p className="pl-1 font-bold text-2xl text-[#312742b6]">R$ {product.price}</p>
                    <button className="bg-[#312742] hover:bg-[#3e3153] text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer transition-all duration-300 hover:scale-101">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}