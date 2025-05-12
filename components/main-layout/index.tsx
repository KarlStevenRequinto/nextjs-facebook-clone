"use client";
import React from "react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import ProfileLeftSideBar from "@/app/(pages)/[profilename]/_components/LeftSideBar";
import ProfileRightSideBar from "@/app/(pages)/[profilename]/_components/RightSideBar";
import GamingLeftSideBar from "@/app/(pages)/gaming/_components/LeftSideBar";
import GamingRightSideBar from "@/app/(pages)/gaming/_components/RightSideBar";
import GroupsLeftSideBar from "@/app/(pages)/groups/_components/LeftSideBar";
import GroupsRightSideBar from "@/app/(pages)/groups/_components/RightSideBar";
import HomeLeftSideBar from "@/app/(pages)/_components/LeftSideBar";
import HomeRightSideBar from "@/app/(pages)/_components/RightSideBar";
import MarketsLeftSideBar from "@/app/(pages)/marketplace/_components/LeftSideBar";
import MarketsRightSideBar from "@/app/(pages)/marketplace/_components/RightSideBar";
import WatchLeftSideBar from "@/app/(pages)/watch/_components/LeftSideBar";
import WatchRightSideBar from "@/app/(pages)/watch/_components/RightSideBar";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isProfilePage = /^\/[^\/]+$/.test(pathname) && !["/login", "/groups", "/gaming", "/marketplace", "/watch"].includes(pathname);
    const leftSidebar = () => {
        if (isProfilePage) {
            return <ProfileLeftSideBar />;
        } else if (pathname.startsWith("/gaming")) {
            return <GamingLeftSideBar />;
        } else if (pathname.startsWith("/groups")) {
            return <GroupsLeftSideBar />;
        } else if (pathname.startsWith("/marketplace")) {
            return <MarketsLeftSideBar />;
        } else if (pathname.startsWith("/watch")) {
            return <WatchLeftSideBar />;
        } else if (pathname.startsWith("/login")) {
            return null;
        } else return <HomeLeftSideBar />;
    };

    const rightSidebar = () => {
        if (isProfilePage) {
            return <ProfileRightSideBar />;
        } else if (pathname.startsWith("/gaming")) {
            return <GamingRightSideBar />;
        } else if (pathname.startsWith("/groups")) {
            return <GroupsRightSideBar />;
        } else if (pathname.startsWith("/marketplace")) {
            return <MarketsRightSideBar />;
        } else if (pathname.startsWith("/watch")) {
            return <WatchRightSideBar />;
        } else if (pathname.startsWith("/login")) {
            return null;
        } else return <HomeRightSideBar />;
    };
    return (
        <div className="flex flex-1 overflow-hidden">
            <aside className="w-[280px] bg-amber-200 overflow-y-auto hidden md:block">{leftSidebar()}</aside>

            <main className="flex-1 overflow-y-auto">{children}</main>

            <aside className="w-[280px] bg-amber-200 overflow-y-auto hidden lg:block">{rightSidebar()}</aside>
        </div>
    );
};

export default MainLayout;
