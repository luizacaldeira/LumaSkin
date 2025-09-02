export interface ProductCardProps {
    title: string;
    description?: string;
    benefits?: string;
    imageUrl?: string;
    price: number;
    variant?: string[];
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface ProductListProps {
    products: ProductCardProps[];
}