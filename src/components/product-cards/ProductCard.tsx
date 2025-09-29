'use client'
import { useRouter } from "next/navigation";
import { ProductCardProps } from "./types";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/src/components/ui/card"

export function ProductCard(props: ProductCardProps){

    return (
        <Card className="bg-[#d9c7ea44] text-[#201324]">
            <CardHeader>
            <img src={props.imageUrl} alt={props.title} className="object-cover w-full h-70 2xl:h-100" />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-2xl font-radley italic">{props.title}</CardTitle>
                <div className="text-[#201324ab] font-bold">{`R$ ${props.price}`}</div>
            </CardContent>
            {props.buttonText && (
                <CardFooter>
                    <button 
                    className="bg-[#493a64] text-[#F1EDF9] font-radley italic text-sm sm:text-base md:text-lg lg:text-xl px-2 py-1 sm:px-2.5 sm:py-1 md:px-4 md:py-1 rounded-full cursor-pointer hover:bg-[#312742] hover:scale-103 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                    onClick={() => props.onButtonClick?.()}>{props.buttonText}</button>
                </CardFooter>
            )}
            
        </Card>
    );
}   