import FormInput from '../ui/form-input';
import { FormEvent } from 'react';
import { DialogProps } from './types';
import { Trash2, X} from 'lucide-react';

export default function Dialog({ type, product, onClose, onSubmit, formData, setFormData, error, handleImageChange }: DialogProps) {

    const editable = type === "create" || type === "edit";

    const updateFormData = (field: string, value: any) => {
        setFormData((prev: typeof formData) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await onSubmit(e);
    };

    return (
        <div 
            className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-[#000000b4] z-50'
            onClick={onClose}
        >
            <div 
                className='flex flex-col bg-[#D9C7EA] p-8 rounded-2xl shadow-2xl w-fit border border-[#b199c7]'
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className='text-lg font-bold text-[#3a2f50] uppercase tracking-wide'>
                        {type} Product
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-[#3a2f50] hover:text-[#2a1f40] text-2xl font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors cursor-pointer"
                    >
                        <X/>
                    </button>
                </div>

                {error && (
                    <div style={{ color: 'red', marginBottom: '10px' }}>
                        {error}
                    </div>
                )}
                
                {type !== "delete" && (
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-6'>
                            <div className='flex flex-col'>
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <FormInput 
                                        label="Product Name"
                                        placeholder="Enter product name"
                                        type="text" 
                                        value={formData.title}
                                        onChange={(value) => updateFormData('title', value)}
                                        readOnly={!editable}
                                    />
                                    <FormInput 
                                        label="Price"
                                        placeholder="Enter price"
                                        type="number" 
                                        value={formData.price.toString()}
                                        onChange={(value) => updateFormData('price', parseFloat(value) || 0)}
                                        readOnly={!editable}
                                        prefix="R$"
                                    />
                                </div>
                                <FormInput 
                                    label="Description"
                                    placeholder="Enter product description"
                                    textarea={true}
                                    value={formData.description}
                                    onChange={(value) => updateFormData('description', value)}
                                    readOnly={!editable}
                                    rows={4}
                                />
                                
                                <FormInput 
                                    label="Benefits"
                                    placeholder="Enter product benefits"
                                    textarea={true}
                                    value={formData.benefits}
                                    onChange={(value) => updateFormData('benefits', value)}
                                    readOnly={!editable}
                                    rows={2}
                                />
                                {editable && (
                                    <div className="flex flex-col gap-3 mt-4">
                                        <label className="text-sm font-semibold text-[#3a2f50] pl-1">
                                            {type === "edit" ? "New Product Image" : "Choose Product Image"}
                                        </label>
                                        <div className="relative">
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        const file = e.target.files[0];
                                                        handleImageChange(file);
                                                    }
                                                }}
                                                className="w-full p-3 rounded-lg border-2 border-dashed border-[#b199c7] bg-white hover:border-[#9b7fb8] focus:outline-none focus:border-[#71568b] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#312742] file:text-white hover:file:bg-[#3e3153] cursor-pointer"
                                                id="image-upload"
                                            />
                                        </div>
                                        {formData.image && (
                                            <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                                                <span className="text-green-600">✓</span>
                                                <p className="text-sm text-green-700 font-medium">
                                                    File selected: {formData.image.name}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {!editable && product?.imageUrl && (
                                <div className="flex flex-col gap-3 mb-4 bg-[#6f3aa81a] p-4 rounded-lg ">
                                    <label className="flex w-full text-sm font-semibold text-[#3a2f50] pl-1 justify-center mt-3">
                                        Product Image
                                    </label>
                                    <div className="flex w-full h-full justify-center items-center">
                                        <img 
                                            src={product.imageUrl} 
                                            alt={product.title} 
                                            className="w-fit h-55 object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='w-full flex gap-4 mt-6 items-center justify-center'>
                            {editable && (
                                <button 
                                    type="submit"
                                    onClick={handleSubmit}
                                    className='bg-[#312742] hover:bg-[#3e3153] text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-colors shadow-md hover:shadow-lg'>
                                    Save
                                </button>
                            )}
                            <button 
                                type="button"
                                className='bg-gray-200 hover:bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg cursor-pointer transition-colors border border-gray-300 hover:border-gray-400'
                                onClick={onClose}>Close
                            </button>
                        </div>                  
                    </form>
                )}
                
                {type === "delete" && (
                    <div className="text-center">
                        <div className="mb-6 p-4 rounded-lg">
                            <div className='w-full flex justify-center'>
                                <Trash2 className='mb-3 text-[#312742]' size={64} />
                            </div>
                            <p className="text-lg font-medium mb-2">
                                Are you sure you want to delete this product?
                            </p>
                            <p className="font-bold text-2xl">
                                "{product?.title || "Unknown Product"}"
                            </p>
                            <p className="text-sm text-[#312742] mt-2">
                                This action cannot be undone.
                            </p>
                        </div>
                        <div className='w-full flex gap-4 items-center justify-center'>
                            <button 
                                type="button"
                                className='bg-[#312742] hover:bg-[#3e3153] text-white font-semibold py-3 px-8 rounded-lg cursor-pointer transition-colors shadow-md hover:shadow-lg'
                                onClick={handleSubmit}>
                                Confirm Delete
                            </button>
                            <button 
                                type="button"
                                className='bg-gray-200 hover:bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg cursor-pointer transition-colors border border-gray-300 hover:border-gray-400'
                                onClick={onClose}>Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}