"use client";

import React from "react";
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
import SearchModal from "./_navbar-modals/search-modal";
import { useViewModel } from "./useViewModel";
import MenuModal from "./_navbar-modals/menu-modal";
import MessengerModal from "./_navbar-modals/messenger-modal";
import NotificationModal from "./_navbar-modals/notifications-modal";
import AccountModal from "./_navbar-modals/account-modal";

const Navbar = () => {
    const {
        activeTab,
        setActiveTab,
        isSearchOpen,
        setIsSearchOpen,
        isSearchBarExpanded,
        isSearchFocused,
        setIsSearchFocused,
        isMenuOpen,
        setIsMenuOpen,
        isMessengerOpen,
        setIsMessengerOpen,
        isNotificationOpen,
        setIsNotificationOpen,
        isAccountOpen,
        setIsAccountOpen,
        searchValue,
        setSearchValue,
        searchRef,
        modalRef,
        modalInputRef,
        activeIcon,
        isProfilePressed,
        setIsProfilePressed,
        handleModalToggle,
        setActiveIcon,
    } = useViewModel();

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

    return (
        <>
            <nav className="h-[56px] bg-white sticky top-0 z-90 flex items-center justify-between px-4 shadow">
                {/* Left - Icon + Searchbar */}
                <div className="flex items-center gap-2">
                    <div>
                        <Image src="/icons/facebook-icon.png" alt="facebook icon" height={40} width={40} className="object-cover" />
                    </div>

                    <div className="hidden xl:flex items-center bg-[color:var(--comment-background)] rounded-full w-[240px] h-[40px]">
                        <span className="pl-3">
                            <SearchIcon fillColor="var(--secondary-text)" width="16" height="16" />
                        </span>

                        <input
                            type="text"
                            ref={searchRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search Facebook"
                            onFocus={() => {
                                setIsSearchOpen(true);
                                setTimeout(() => {
                                    modalInputRef.current?.focus();
                                }, 100);
                            }}
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
                                    setIsMenuOpen(false);
                                    setIsMessengerOpen(false);
                                    setIsNotificationOpen(false);
                                    setIsAccountOpen(false);
                                    setActiveIcon(null);
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
                            icon={
                                <MenuIcon
                                    width="20"
                                    height="20"
                                    fillColor={activeIcon === "menu" ? "var(--primary-button-background)" : "var(--primary-black)"}
                                />
                            }
                            iconHeight={40}
                            iconWidth={40}
                            isActive={activeIcon === "menu"}
                            onClickIcon={() => handleModalToggle("menu")}
                        />
                        <ActionIcons
                            icon={
                                <MessengerIcon
                                    width="20"
                                    height="20"
                                    fillColor={activeIcon === "messenger" ? "var(--primary-button-background)" : "var(--primary-black)"}
                                />
                            }
                            iconHeight={40}
                            iconWidth={40}
                            isActive={activeIcon === "messenger"}
                            onClickIcon={() => handleModalToggle("messenger")}
                        />
                        <ActionIcons
                            icon={
                                <NotificationIcon
                                    width="20"
                                    height="20"
                                    fillColor={activeIcon === "notification" ? "var(--primary-button-background)" : "var(--primary-black)"}
                                />
                            }
                            iconHeight={40}
                            iconWidth={40}
                            isActive={activeIcon === "notification"}
                            onClickIcon={() => handleModalToggle("notification")}
                        />
                    </div>
                    <div
                        className={`group w-[40px] h-[40px] rounded-full border border-[#cec8c4ab] bg-[#E2E5E9] transition-all duration-100 cursor-pointer relative ${
                            isProfilePressed ? "scale-96" : "scale-100"
                        }`}
                        onMouseDown={() => setIsProfilePressed(true)}
                        onMouseUp={() => setIsProfilePressed(false)}
                        onMouseLeave={() => setIsProfilePressed(false)}
                        onClick={() => handleModalToggle("account")}
                    >
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

            {/* Search Modal */}
            <SearchModal
                isSearchOpen={isSearchOpen}
                isSearchBarExpanded={isSearchBarExpanded}
                isSearchFocused={isSearchFocused}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setIsSearchOpen={setIsSearchOpen}
                setIsSearchFocused={setIsSearchFocused}
                modalRef={modalRef}
                modalInputRef={modalInputRef}
            />

            {/* Menu Modal */}
            <MenuModal isMenuOpen={isMenuOpen} />
            {/* Messenger Modal */}
            <MessengerModal isMessengerOpen={isMessengerOpen} />
            {/* Notifications Modal */}
            <NotificationModal isNotificationOpen={isNotificationOpen} />
            {/* Account Modal */}
            <AccountModal isAccountOpen={isAccountOpen} />
        </>
    );
};

export default Navbar;
