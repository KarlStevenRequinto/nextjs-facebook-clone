import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Facebook Clone",
    description: "Personal project to clone Facebook",
};

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import MainLayout from "@/components/main-layout";
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex flex-col h-screen">
                    <Navbar />
                    <MainLayout
                        leftSidebar={<div className="p-4 ">LEFT: Friends, Groups, Shortcuts</div>}
                        rightSidebar={<div className="p-4">RIGHT: Birthdays, Contacts, Sponsored</div>}
                    >
                        <div className="p-4">{children}</div>
                    </MainLayout>
                </div>
            </body>
        </html>
    );
}
