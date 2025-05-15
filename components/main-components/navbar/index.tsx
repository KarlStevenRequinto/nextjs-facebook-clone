"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
import ArrowLeftIcon from "@/public/svg/arrow-left-icon";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("/");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const navItems = [
        { icon: <HomeIcon width="24" height="24" isActive={activeTab === "/"} />, name: "home", routeName: "/" },
        { icon: <VideoIcon width="24" height="24" isActive={activeTab === "watch"} />, name: "video", routeName: "watch" },
        {
            icon: <MarketplaceIcon width="24" height="24" isActive={activeTab === "marketplace"} />,
            name: "marketplace",
            routeName: "marketplace",
        },
        { icon: <GroupsIcon width="24" height="24" isActive={activeTab === "groups"} />, name: "groups", routeName: "groups" },
        { icon: <GamingIcon width="24" height="24" isActive={activeTab === "gaming"} />, name: "gaming", routeName: "gaming" },
    ];
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (searchRef.current && !searchRef.current.contains(target) && modalRef.current && !modalRef.current.contains(target)) {
                setIsSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isSearchOpen) {
            const timeout = setTimeout(() => setIsSearchBarExpanded(true), 150);
            return () => clearTimeout(timeout);
        } else {
            setIsSearchBarExpanded(false);
        }
    }, [isSearchOpen]);

    return (
        <>
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
                            ref={searchRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search Facebook"
                            onFocus={() => setIsSearchOpen(true)}
                            className="bg-transparent outline-none border-none placeholder:text-[color:var(--secondary-text)] placeholder:text-md pt-[7px] px-[8px] pb-[9px] w-[212px] h-full"
                            style={{
                                color: "var(--primary-black)",
                            }}
                        />
                    </div>

                    {/* Circle Search Icon: shown on <1280px */}
                    <div className="xl:hidden w-10 h-10 bg-[color:var(--comment-background)] rounded-full flex items-center justify-center">
                        <SearchIcon fillColor="var(--secondary-text)" width="16" height="16" />
                    </div>
                </div>

                {/* Center - Nav Buttons */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">
                    {navItems.map((item, index) => (
                        <Link key={index} href={`/${item.routeName}`} passHref>
                            <NavigationButton
                                icon={item.icon}
                                isActive={activeTab === item.name}
                                onClickBtn={() => {
                                    setActiveTab(item.name);
                                }}
                                tooltipText={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            />
                        </Link>
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

            {isSearchOpen && (
                <div
                    className={`absolute left-0 top-0 w-[320px] h-[500px] bg-white rounded-lg shadow-xl pl-2 pr-4 py-2 z-100 transform transition-transform duration-500 ease-in-out ${
                        isSearchOpen ? "translate-x-0 opacity-100" : "-translate-x-[50%] opacity-0 pointer-events-none"
                    }`}
                    ref={modalRef}
                >
                    <div className="relative flex items-center pl-2">
                        <div
                            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[color:var(--comment-background)] cursor-pointer z-10 transition-transform duration-500 ease-in-out ${
                                isSearchBarExpanded ? "-translate-x-2" : "translate-x-0"
                            }`}
                        >
                            <ArrowLeftIcon width="20" height="20" fillColor="var(--secondary-text)" />
                        </div>

                        {/* Animated Search Bar */}
                        <div className="relative w-[252px] h-[40px]">
                            <div
                                className={`absolute right-0 top-0 bg-[color:var(--comment-background)] text-white rounded-full h-[40px] transition-[width] duration-100 ease-in-out hidden xl:flex items-center`}
                                style={{ width: isSearchBarExpanded ? "252px" : "240px" }}
                            >
                                {!isSearchBarExpanded && (
                                    <span className="pl-3">
                                        <SearchIcon fillColor="var(--secondary-text)" width="16" height="16" />
                                    </span>
                                )}
                                <input
                                    type="text"
                                    ref={searchRef}
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search Facebook"
                                    onFocus={() => setIsSearchOpen(true)}
                                    className="bg-transparent outline-none border-none placeholder:text-[color:var(--secondary-text)] placeholder:text-md pt-[7px] pb-[9px] w-full h-full transition-[padding] duration-300"
                                    style={{
                                        color: "var(--primary-black)",
                                        paddingLeft: isSearchBarExpanded ? "16px" : "8px",
                                        paddingRight: isSearchBarExpanded ? "16px" : "8px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <span>Recent</span>
                        <span>Edit</span>
                    </div>

                    <div>list of recent searches</div>
                </div>
            )}
        </>
    );
};

export default Navbar;
