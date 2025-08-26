import type { Metadata } from "next";
import { Montserrat, Radley } from "next/font/google";
import {ShoppingCart, Home, Contact, ShoppingBasket, Settings, Phone} from "lucide-react";
import "./globals.css";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./../components/ui/SocialIcons";

import Navbar from "./../components/layout/Navbar/index";
import Footer from "./../components/layout/Footer/index";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const radley = Radley({
  subsets: ["latin"],
  variable: "--font-radley",
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Luma Skin",
  description: "A Next.js e-commerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: <Home /> },
    { id: 'contact', label: 'Contact', path: '/contact', icon: <Contact /> },
    { id: 'products', label: 'Products', path: '/products', icon: <ShoppingBasket /> },
    { id: 'management', label: 'Management', path: '/management', icon: <Settings /> },
  ];

  const loginButton = (
    <button className="bg-[#59467A] text-[#F1EDF9] px-4 py-1 rounded-2xl hover:bg-[#493a64] transition-colors cursor-pointer uppercase">
      Login
    </button>
  );

  const cartIcon = (
    <button className="text-[#59467A]">
      <ShoppingCart size={24} />
    </button>
  );

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${radley.variable} font-montserrat antialiased min-h-screen flex flex-col`}
      >
        <Navbar
          logoSrc="lumaSkin.svg"
          navItems={navItems}
          loginButton={loginButton}
          cartIcon={cartIcon}
        />

        <main className="flex-1 pt-10">
          {children}
        </main>
        
        <Footer
          phone={{
            icon: <Phone size={22}/>,
            number: "+1 (555) 123-4567"
          }}
          socialLinks={[
            {
              icon: <FacebookIcon />,
              url: "https://facebook.com"
            },
            {
              icon: <TwitterIcon />,
              url: "https://twitter.com"
            },
            {
              icon: <InstagramIcon />,
              url: "https://instagram.com"
            }
          ]}
          logoSrc="lumaSkin.svg"
          copyright="© 2025 Luma Skin. All rights reserved."
        />
      </body>
    </html>
  );
}
