'use client'

import FormInput from "@/components/ui/form-input";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export type emailTemplate = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const emailTemplate: emailTemplate = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const [emailData, setEmailData] = useState<emailTemplate>(emailTemplate);
    const [formMessage, setFormMessage] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        });

        if (response.ok) {
            setFormMessage('Message sent successfully!');
            setEmailData(emailTemplate);
            setSuccess(true);
            setTimeout(() => {
                setFormMessage("");
            }
            , 3000);
        } else {
            setFormMessage('Failed to send message. Please try again later.');
            setSuccess(false);
            setTimeout(() => {
                setFormMessage("");
            }
            , 3000);
        }
    }

    function handleChange(value: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name } = event.target;
        setEmailData({ ...emailData, [name]: value });
    }

    return(
        <div>
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    {formMessage !== "" && (
                        <div>
                            {success ? (
                                <p className='text-sm text-[#125a00] mb-2 bg-[#d4edda] p-2 rounded'>
                                    {formMessage}
                                </p>
                            ) : (
                                <p className='text-sm  text-[#570000] bg-[#ffd9d9] mb-2 rounded'>
                                    {formMessage}
                                </p>
                            )}
                        </div>
                    )}
                <FormInput label="Name" placeholder="Type your name..." type="text" name="name" value={emailData.name} onChange={handleChange} />
                <FormInput label="E-mail" placeholder="Type your e-mail..." type="email" name="email" value={emailData.email} onChange={handleChange} />
                <FormInput label="Subject" placeholder="Type the subject..." type="text" name="subject" value={emailData.subject} onChange={handleChange} />
                <FormInput label="Message" placeholder="Type your message..." type="text" name="message" textarea={true} value={emailData.message} onChange={handleChange} />
                <button 
                className="bg-[#493a64bd] text-[#F1EDF9] text-sm sm:text-base md:text-lg lg:text-xl px-10 py-1 sm:py-1 md:py-1 rounded-md cursor-pointer hover:bg-[#312742] hover:scale-101 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md w-fit mt-4 flex justify-center items-center gap-1"
                type="submit">
                    Send
                    <SendHorizontal strokeWidth={1.5} className="h-5"/>
                </button>
            </form>
        </div>
    );
}