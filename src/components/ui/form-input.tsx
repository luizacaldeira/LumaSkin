interface FormInputProps {
    label: string;
    placeholder: string;
    type?: string;
    textarea?: boolean;
}


export default function FormInput({ label, placeholder, type = "text", textarea = false }: FormInputProps) {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <p className="uppercase pl-1">{label}</p>
            {textarea ? (
            <textarea
                placeholder={placeholder}
                className="p-2 rounded-lg border-none bg-white focus:outline-none focus:ring-1 focus:ring-[#71568b49]"
                rows={5}
            />
            ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="p-2 rounded-lg border-none bg-white focus:outline-none focus:ring-1 focus:ring-[#71568b49]"
            />
            )}
        </div>
    );
}