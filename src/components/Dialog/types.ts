import { useState } from "react";
import { FormEvent } from "react";
import { ProductCardProps } from "../product-cards/types";

export type DialogTypes = "view" | "create" | "edit" | "delete";

export interface DialogProps {
    type: DialogTypes;
    product?: ProductCardProps;
    onClose: () => void;
    onSubmit: (event: FormEvent) => Promise<void>;
    formData: {
        title: string;
        price: number;
        description: string;
        benefits: string;
        image: File | null;
    };
    setFormData: (data:any) => void;
    error: string | null;
    handleImageChange: (file: File) => void;
}
export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { isOpen, open, close };
}