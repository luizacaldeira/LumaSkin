'use client'
import { usePathname } from 'next/navigation';
import { Montserrat, Radley } from "next/font/google";
import "./globals.css";

import Navbar from "./../components/layout/Navbar/index";
import Footer from "./../components/layout/Footer/index";
import Sidebar from "../components/layout/Sidebar";

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isManagementPage = pathname === '/management';

  if (isLoginPage) {
    return (
      <html lang="en">
        <body className={`${montserrat.variable} ${radley.variable} font-montserrat antialiased`}>
          {children}
        </body>
      </html>
    );
  }
  if (isManagementPage) {
    return (
      <html lang="en">
        <body className={`${montserrat.variable} ${radley.variable} font-montserrat antialiased`}>
          <Sidebar />
          <main className="flex-1 pt-10">
            {children}
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${radley.variable} font-montserrat antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-1 pt-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
