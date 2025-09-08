export interface ContactCardProps {
    icon: React.ReactNode;
    label: string;
    contactInfo: string;
}

export default function ContactCard({ icon, label, contactInfo }: ContactCardProps) {
    return(
        <div className=" h-fit flex-col bg-[#d9c7eabe] text-[#312742] w-full flex items-center justify-center p-5 cursor-pointer rounded-2xl hover:scale-102 hover:bg-[#d9c7ea88] transition-all duration-200 ease-in-out">
            {icon}
            <p className=" font-radley text-2xl">{label}</p>
            <div className="text-md text-[#201324c4]">{contactInfo}</div>
        </div>
    );
}