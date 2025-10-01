import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutUsCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

interface AboutUsProps {
    cards: AboutUsCardProps[];
}

export default function AboutUs({ cards }: AboutUsProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-[#493a6425] via-[#F9FAFB] to-[#F9FAFB]">
            <div className="container mx-auto px-4">
                <p className="pl-18 text-4xl md:text-5xl mb-8 text-[#59467A] font-radley italic">about us</p>
                <div className="flex flex-col gap-15 px-16 lg:flex-row ">
                    {cards.map((card, index) => (
                        <Card key={index} className="bg-[#d9c7ea44] text-[#201324] text-center">
                            <CardHeader>
                                {card.icon}
                                <CardTitle className="font-radley italic text-3xl">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm" >{card.content}</p>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    );
}