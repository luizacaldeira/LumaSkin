import { getIdentities } from '@/app/api/get-mvv';
import AboutUs from './AboutUs';
import { Target, Lightbulb, Gem } from 'lucide-react';

const ICON_COMPONENTS = [Target, Lightbulb, Gem];
const ICON_PROPS = {
    className: 'w-14 h-14 mx-auto mb-4 text-[#59467A]',
    strokeWidth: 1
} as const;

export default async function AboutUsWrapper() {
    const data = await getIdentities();
    
    const cards = data.map((item, index) => {
        const IconComponent = ICON_COMPONENTS[index];
        
        return {
            icon: <IconComponent {...ICON_PROPS} />,
            title: item.title,
            content: item.text
        };
    });

    return <AboutUs cards={cards} />;
}