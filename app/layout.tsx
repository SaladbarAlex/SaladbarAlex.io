

import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";

const openSans = Libre_Franklin({
    weight: "400",
    style: "normal",
    display: "swap",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex Salazar",
    description: "Alex Salazar personal Website",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/logo-white.svg" />
            {/* Load the model-viewer script globally. */}
            <Script
                async
                strategy="afterInteractive"
                type="module"
                src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js"
            />
        </head>
        <body className={openSans.className}>
        <NavBar />
        {children}
        </body>
        </html>
    );
}
