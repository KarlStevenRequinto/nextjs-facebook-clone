import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import MainLayout from "@/components/main-layout";

export const metadata: Metadata = {
    title: "Facebook Clone",
    description: "Personal project to clone Facebook",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="flex flex-col h-screen">
                    <Navbar />
                    <MainLayout children={children} />
                </div>
            </body>
        </html>
    );
}
