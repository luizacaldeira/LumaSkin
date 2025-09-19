import { ReactNode } from "react";

export interface SidebarMenuItem {
    id: string;
    label: string;
    path: string;
    icon: ReactNode;
    badge?: number | string | null;
}


export interface SidebarData {
    menuItems: SidebarMenuItem[];
}

export interface SidebarProps {
    data?: SidebarData;
    isOpen?: boolean;
    onToggle?: () => void;
}
