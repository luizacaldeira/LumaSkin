'use client'

import FormInput from "@/src/components/ui/form-input";

export default function ContactForm() {
    return(
        <div>
            <form className="flex flex-col gap-0 w-full">
                <FormInput label="Name" placeholder="Type your name..." type="text" />
                <FormInput label="E-mail" placeholder="Type your e-mail..." type="email" />
                <FormInput label="Subject" placeholder="Type the subject..." type="text" />
                <FormInput label="Message" placeholder="Type your message..." type="text" textarea={true} />
                <button 
                className="bg-[#493a64bd] text-[#F1EDF9] font-radley italic text-sm sm:text-base md:text-lg lg:text-xl px-2 py-1 sm:px-2.5 sm:py-1 md:px-4 md:py-1 rounded-md cursor-pointer hover:bg-[#312742] hover:scale-101 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md w-full mt-4"
                type="submit">send now</button>
            </form>
        </div>
    );
}