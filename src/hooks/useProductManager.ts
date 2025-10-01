'use client';

import { useState } from 'react';
import { DialogTypes } from '../components/Dialog/types';
import { ProductCardProps } from '../components/product-cards/types';

interface ProductFormData {
    title: string;
    price: number;
    description: string;
    benefits: string;
    image: File | null;
}

export function useProductManager(refreshProducts: () => void) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState<DialogTypes>("create");
    const [selectedProduct, setSelectedProduct] = useState<ProductCardProps | null>(null);
    const [formData, setFormData] = useState<ProductFormData>({
        title: "",
        price: 0,
        description: "",
        benefits: "",
        image: null,
    });
    const [error, setError] = useState<string | null>(null);

    const resetForm = () => {
        setFormData({
            title: "",
            price: 0,
            description: "",
            benefits: "",
            image: null,
        });
        setError(null);
    };

    const validateFormData = (includeImage = true, includeBenefits = false) => {
        const errors = [];

        if (!formData.title.trim()) {
            errors.push("Name is required");
        }
        if (formData.price <= 0) {
            errors.push("Price must be greater than 0");
        }
        if (!formData.description.trim()) {
            errors.push("Description is required");
        }
        if (includeBenefits && !formData.benefits.trim()) {
            errors.push("Benefits is required");
        }
        if (includeImage && !formData.image) {
            errors.push("Image is required");
        }
        if (errors.length > 0) {
            setError(errors[0]);
            return false;
        }
        setError(null);
        return true;
    };

    const handleOperationSuccess = () => {
        closeDialog();
        refreshProducts();
    };

    const handleView = (product: ProductCardProps) => {
        setSelectedProduct(product);
        setFormData({
            title: product.title,
            price: product.price,
            description: product.description || "",
            benefits: product.benefits || "",
            image: null,
        });
        setDialogType("view");
        setDialogOpen(true);
    };

    const handleEdit = (product: ProductCardProps) => {
        setSelectedProduct(product);
        setFormData({
            title: product.title,
            price: product.price,
            description: product.description || "",
            benefits: product.benefits || "",
            image: null,
        });
        setDialogType("edit");
        setDialogOpen(true);
    };

    const handleDelete = (product: ProductCardProps) => {
        setSelectedProduct(product);
        setDialogType("delete");
        setDialogOpen(true);
    };

    const handleCreate = () => {
        resetForm();
        setSelectedProduct(null);
        setDialogType("create");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSelectedProduct(null);
        resetForm();
    };

    const updateFormData = (field: keyof ProductFormData, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (error) setError(null);
    };

    const uploadImage = async (file: File): Promise<string | null> => {
        try {
            const uploadFormData = new FormData();
            uploadFormData.append('image', file);
            
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: uploadFormData
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Upload failed:', errorText);
                throw new Error(`Upload failed: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result.success && result.data?.url) {
                return result.data.url;
            }
            
            throw new Error('Invalid upload response');

        } catch (error) {
            console.error('Upload error:', error);
            setError(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return null;
        }
    };

    const createProduct = async () => {
        if (!validateFormData(true, false)) {
            return;
        }
        try {
            let imageUrl = null;
            if (formData.image) {
                imageUrl = await uploadImage(formData.image);
                if (!imageUrl) {
                    return;
                }
            }
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title.trim(),
                    price: formData.price,
                    description: formData.description.trim() || undefined,
                    benefits: formData.benefits.trim() || undefined,
                    imageUrl: imageUrl,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create product');
            }
            handleOperationSuccess();
        } catch (error) {
            throw new Error('Failed to create product');
        }
    };

    const updateProduct = async () => {
        if (!selectedProduct) return;
        if (!validateFormData(false, true)) {
            return;
        }
        try {
            let imageUrl = selectedProduct.imageUrl;
            if (formData.image) {
                const uploadedUrl = await uploadImage(formData.image);
                if (uploadedUrl) {
                    imageUrl = uploadedUrl;
                } else {
                    return;
                }
            }
            const response = await fetch(`/api/products/${selectedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: formData.title.trim(),
                    price: formData.price,
                    description: formData.description.trim() || undefined,
                    benefits: formData.benefits.trim() || undefined,
                    imageUrl: imageUrl,
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to update product');
            }
            handleOperationSuccess();
        } catch (error) {
            throw new Error('Failed to update product');
        }
    };

    const deleteProduct = async () => {
        if (!selectedProduct) return;
        setError(null);
        try {
            const response = await fetch(`/api/products/${selectedProduct.id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to delete product');
            }
            handleOperationSuccess();
        } catch (error) {
            throw new Error('Failed to delete product');
        }
    };

    const handleImageChange = async (file: File) => {
        setFormData(prev => ({
            ...prev,
            image: file
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const currentyType = dialogType;
        if (currentyType === "create") {
            await createProduct();
        } else if (currentyType === "edit") {
            await updateProduct();
        } else if (currentyType === "delete") {
            await deleteProduct();
        }
    };

    return {
        dialogOpen,
        dialogType,
        selectedProduct,
        formData,
        error,

        handleView,
        handleEdit,
        handleDelete,
        handleCreate,
        closeDialog,
        uploadImage,
        setFormData,
        handleImageChange,
        updateFormData,
        handleSubmit,
    };
}