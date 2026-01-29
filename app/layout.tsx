import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Jine Next App",
    description: "Shoppin' like its 1990",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${openSans.variable}`}>
            <body className="grid grid-rows-[auto_1fr_auto] min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
