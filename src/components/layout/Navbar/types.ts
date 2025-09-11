export interface NavItem{
    id: string;
    label?: string;
    path: string;
    icon?: React.ReactNode;
}
export interface NavbarProps{
    logoSrc: string;
    navItems: NavItem[];
    loginButton: React.ReactNode;
}