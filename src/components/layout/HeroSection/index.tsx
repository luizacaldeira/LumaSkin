export default function HeroSection(){
    return(
        <div className="flex flex-col md:flex-row justify-between bg-[#D9C7EA] h-fit text-[#59467A]">
            <div className=" flex flex-col w-full gap-4 justify-center px-4 md:px-13 py-10">
                <div className="text-4xl lg:text-6xl 2xl:text-8xl font-radley italic">your skin, your light, everyday.</div>
                <div className="text-xs lg:text-sm 2xl:text-lg">Discover the perfect blend of nature and science with our skincare products. At <strong>Luma Skin</strong>, we combine advanced dermatological research with the purest botanical ingredients to deliver visible results and long-lasting skin health.</div>
                <div>
                    <button className="bg-[#F1EDF9] font-radley italic text-sm sm:text-base md:text-lg lg:text-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full cursor-pointer hover:text-[#493a64] hover:scale-105 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">see more</button>
                </div>
            </div>
            <div className="w-full">
                <img 
                    src="/hero-section-mobile.png" 
                    alt="Hero section mobile" 
                    className=" w-full object-cover md:hidden" 
                />
                <img 
                    src="/hero-section-img.png" 
                    alt="Hero section desktop" 
                    className="hidden md:flex h-full w-full object-cover" 
                />
            </div>
        </div>
    );
}