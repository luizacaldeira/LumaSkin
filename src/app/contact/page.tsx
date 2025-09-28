import {Phone, Store, Mail, MessageCircle } from "lucide-react";
import ContactCard from "../../components/contact-card";
import ContactForm from "../../components/contact-form";
import StoreMap from "../../components/store-map";

export default function ContactPage() {
    return (
        <div className="flex flex-col p-5 py-12 gap-5">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col bg-[#d9c7eabe] text-[#312742] w-full p-6 gap-3 rounded-2xl">
                    <p className="font-radley text-3xl">send a message</p>
                    <ContactForm />
                </div>
                <div className="flex flex-col bg-white w-full gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5 w-full h-fit">
                        <ContactCard icon={<Phone />} label="phone" contactInfo="(99) 99999-9999" />
                        <ContactCard icon={<Mail />} label="e-mail" contactInfo="example@example.com" />
                        <ContactCard icon={<MessageCircle />} label="whatsapp" contactInfo="(99) 99999-9999" />
                        <ContactCard icon={<Store />} label="our store" contactInfo="123 Queen St, Toronto, Canada" />
                    </div>
                    <StoreMap />
                </div>
            </div>
        </div>
    );
}
