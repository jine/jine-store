import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import "./globals.css";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap",
});

/**
 * Metadata for the root layout.
 * Static for now, can be dynamic later.
 */
export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    ),
    title: {
        template: "%s | Store App",
        default: "Store App",
    },
    description: "Shoppin' like its 1990?",
    robots: {
        index: true,
        follow: true,
    },
};

/**
 * Root layout.
 * @param children - The children to render.
 * @returns The root layout.
 */
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
