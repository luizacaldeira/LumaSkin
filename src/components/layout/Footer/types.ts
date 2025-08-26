import { ReactNode } from "react";

export interface FooterProps {
    phone: {
        icon: ReactNode;
        number: string;
    };
    socialLinks: Array<{
        icon: ReactNode;
        url: string;
    }>;
    logoSrc: string;
    copyright: string;
}
