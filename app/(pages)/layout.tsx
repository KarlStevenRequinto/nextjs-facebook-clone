"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainLayout from "@/components/main-layout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    const leftSidebar = () => {
        if (pathname.startsWith("/gaming")) {
            return <div className="p-4">LEFT: Gaming Menu</div>;
        } else if (pathname.startsWith("/groups")) {
            return <div className="p-4">LEFT: Groups Navigation</div>;
        } else return <div className="p-4">LEFT: Friends, Groups, Shortcuts</div>;
    };

    const rightSidebar = () => {
        if (pathname.startsWith("/gaming")) {
            return <div className="p-4">RIGHT: Leaderboard, Chats</div>;
        } else return <div className="p-4">RIGHT: Birthdays, Contacts, Sponsored</div>;
    };
    return (
        <MainLayout leftSidebar={leftSidebar()} rightSidebar={rightSidebar()}>
            <div className="p-4">{children}</div>
        </MainLayout>
    );
};

export default layout;
