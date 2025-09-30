interface FormInputProps {
    label: string;
    placeholder: string;
    type?: string;
    textarea?: boolean;
    value?: string;
    readOnly?: boolean;
    prefix?: string;
    rows?: number;
    name?: string,
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


export default function FormInput({ label, placeholder, type = "text", textarea = false, value, readOnly, onChange, rows, name }: FormInputProps) {
    return (
        <div className="w-full flex flex-col">
            <p className="pl-1">{label}</p>
            {textarea ? (
            <textarea
                placeholder={placeholder}
                className="p-2 rounded-lg border-none bg-white focus:outline-none focus:ring-1 focus:ring-[#71568b49]"
                rows={rows}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value, e)}
                readOnly={readOnly}
                name={name}
            />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`p-2 rounded-lg border-none bg-white focus:outline-none focus:ring-1 focus:ring-[#71568b49]`}
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value, e)}
                    readOnly={readOnly}
                    name={name}
                />
            )}
        </div>
    );
}