export interface ProductCardProps {
    id: number;
    title: string;
    description: string;
    benefits: string;
    imageUrl: string;
    price: number;
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface ProductListProps {
    products: ProductCardProps[];
}