import React from "react";
import { ReactNode } from "react";

interface MainLayoutProps {
    leftSidebar: ReactNode;
    rightSidebar: ReactNode;
    children: ReactNode;
}

const MainLayout = ({ leftSidebar, rightSidebar, children }: MainLayoutProps) => {
    return (
        <div className="flex flex-1 overflow-hidden">
            <aside className="w-[280px] bg-amber-200 overflow-y-auto hidden md:block">{leftSidebar}</aside>

            <main className="flex-1 overflow-y-auto">{children}</main>

            <aside className="w-[280px] bg-amber-200 overflow-y-auto hidden lg:block">{rightSidebar}</aside>
        </div>
    );
};

export default MainLayout;
