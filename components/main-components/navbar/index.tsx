"use client";

import React, { use } from "react";
import Image from "next/image";
import SearchIcon from "@/public/svg/search-icon";
import NavigationButton from "@/components/sub-components/navigation-button";
import ActionIcons from "@/components/sub-components/action-icons";
import MenuIcon from "@/public/svg/menu-icon";
import MessengerIcon from "@/public/svg/messenger-icon";
import NotificationIcon from "@/public/svg/notification-icon";
import DropDownIcon from "@/public/svg/drop-down-icon";
import HomeIcon from "@/public/svg/home-icon";
import VideoIcon from "@/public/svg/video-icon";
import MarketplaceIcon from "@/public/svg/marketplace-icon";
import GroupsIcon from "@/public/svg/groups-icon";
import GamingIcon from "@/public/svg/gaming-icon";
import { useState } from "react";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home");

    const navItems = [
        { icon: <HomeIcon width="24" height="24" isActive={activeTab === "home"} />, name: "home" },
        { icon: <VideoIcon width="24" height="24" isActive={activeTab === "video"} />, name: "video" },
        {
            icon: <MarketplaceIcon width="24" height="24" isActive={activeTab === "marketplace"} />,
            name: "marketplace",
        },
        { icon: <GroupsIcon width="24" height="24" isActive={activeTab === "groups"} />, name: "groups" },
        { icon: <GamingIcon width="24" height="24" isActive={activeTab === "gaming"} />, name: "gaming" },
    ];

    return (
        <nav className="h-[56px] bg-white sticky top-0 z-50 flex items-center justify-between px-4 shadow">
            {/* Left - Icon + Searchbar */}
            <div className="flex items-center gap-2">
                <div>
                    <Image src="/icons/facebook-icon.png" alt="facebook icon" height={40} width={40} className="object-cover" />
                </div>

                <div className="hidden xl:flex items-center bg-[color:var(--comment-background)] text-white rounded-full w-[240px] h-[40px]">
                    <span className="pl-3">
                        <SearchIcon fillColor="var(--secondary-text)" width="16" height="16" />
                    </span>

                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className="bg-transparent outline-non placeholder:text-[color:var(--secondary-text)] placeholder:text-md pt-[7px] px-[8px] pb-[9px] w-[212px] h-full"
                    />
                </div>

                {/* Circle Search Icon: shown on <1280px */}
                <div className="xl:hidden w-10 h-10 bg-[color:var(--comment-background)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                    </svg>
                </div>
            </div>

            {/* Center - Nav Buttons */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">
                {navItems.map((item, index) => (
                    <NavigationButton
                        key={index}
                        icon={item.icon}
                        isActive={activeTab === item.name}
                        onClickBtn={() => {
                            console.log("NavigationButton: ", item.name);
                            setActiveTab(item.name);
                        }}
                    />
                ))}
            </div>

            {/* Right - Menus + Profile */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <ActionIcons
                        icon={<MenuIcon width="20" height="20" fillColor="var(--primary-black)" />}
                        iconHeight={40}
                        iconWidth={40}
                        onClickIcon={() => console.log("Menu Icon Clicked")}
                    />
                    <ActionIcons
                        icon={<MessengerIcon width="20" height="20" fillColor="var(--primary-black)" />}
                        iconHeight={40}
                        iconWidth={40}
                        onClickIcon={() => console.log("Messenger Icon Clicked")}
                    />
                    <ActionIcons
                        icon={<NotificationIcon width="20" height="20" fillColor="var(--primary-black)" />}
                        iconHeight={40}
                        iconWidth={40}
                        onClickIcon={() => console.log("Notification Icon Clicked")}
                    />
                </div>
                <div className="group w-[40px] h-[40px] rounded-full border border-[#cec8c4ab] bg-[#E2E5E9] transition-colors duration-200 cursor-pointer relative">
                    {/* Profile Image */}
                    <Image src="/images/profile-pic.jpg" alt="profile picture" fill className="object-cover rounded-full" />

                    {/* Overlay that dims on hover */}
                    <div className="absolute inset-0 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                    {/* Dropdown circle */}
                    <div className="absolute bottom-[-1px] right-[-1px] w-[16px] h-[16px] rounded-full bg-white border border-white flex items-center justify-center">
                        <div className="rounded-full bg-[color:var(--secondary-background)] flex items-center justify-center">
                            <DropDownIcon width="12" height="12" fillColor="var(--primary-black)" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
