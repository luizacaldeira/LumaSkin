import AboutUs from './AboutUs';
import { Target, Lightbulb, Gem } from 'lucide-react';

export default async function AboutUsWrapper() {
    const cards = [
        {
            icon: <Target className="w-12 h-12 mx-auto mb-4 text-[#59467A]" strokeWidth={1} />,
            title: "Mission",
            content: "To empower individuals with high-quality skincare products that enhance confidence and well-being."
        },
        {
            icon: <Lightbulb className="w-12 h-12 mx-auto mb-4 text-[#59467A]" strokeWidth={1} />,
            title: "Vision",
            content: "To be a global leader in skincare, recognized for excellence, innovation, and customer care."
        },
        {
            icon: <Gem className="w-12 h-12 mx-auto mb-4 text-[#59467A]" strokeWidth={1} />,
            title: "Values",
            content: "Integrity, innovation, customer focus, and sustainability guide everything we do at Luma Skin."
        }
    ];

    return <AboutUs cards={cards} />;
}
