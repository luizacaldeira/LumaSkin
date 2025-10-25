import AboutUs from './AboutUs';
import { Target, Lightbulb, Gem } from 'lucide-react';

const ICON_COMPONENTS = [Target, Lightbulb, Gem];
const ICON_PROPS = {
    className: 'w-14 h-14 mx-auto mb-4 text-[#59467A]',
    strokeWidth: 1
} as const;

export default async function AboutUsWrapper() {
    const cards = [
        {
            icon: <Target {...ICON_PROPS} />,
            title: 'Our Mission',
            content: 'To empower individuals to achieve healthy, radiant skin through innovative and effective skincare solutions that blend nature and science.',
        },
        {
            icon: <Lightbulb {...ICON_PROPS} />,
            title: 'Our Vision',
            content: 'To be a global leader in skincare, recognized for our commitment to quality, sustainability, and customer satisfaction.',
        },
        {
            icon: <Gem {...ICON_PROPS} />,
            title: 'Our Values',
            content: 'Integrity, innovation, customer-centricity, sustainability, and a passion for enhancing skin health and beauty.',
        },
    ];
    return <AboutUs cards={cards} />;
}