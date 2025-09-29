export interface ProductCardProps {
id: number;
    title: string;
    description: string | null;
    benefits: string | null;
    imageUrl: string | null;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface ProductListProps {
    products: ProductCardProps[];
}