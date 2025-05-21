import React, { useState, useRef, useEffect } from "react";

export const useViewModel = () => {
    const [activeTab, setActiveTab] = useState("/");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMessengerOpen, setIsMessengerOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isProfilePressed, setIsProfilePressed] = useState(false);
    const [activeIcon, setActiveIcon] = useState<string | null>(null);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const modalInputRef = useRef<HTMLInputElement | null>(null);

    const handleModalToggle = (modalName: "menu" | "messenger" | "notification" | "account") => {
        setActiveIcon((prev) => {
            const isSame = prev === modalName;

            // Close all modals first
            setIsMenuOpen(false);
            setIsMessengerOpen(false);
            setIsNotificationOpen(false);
            setIsAccountOpen(false);

            if (isSame) {
                // If clicking the same button, toggle it off
                return null;
            } else {
                // Open the selected one
                if (modalName === "menu") setIsMenuOpen(true);
                if (modalName === "messenger") setIsMessengerOpen(true);
                if (modalName === "notification") setIsNotificationOpen(true);
                if (modalName === "account") setIsAccountOpen(true);

                return modalName;
            }
        });
    };

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

    return {
        activeTab,
        setActiveTab,
        searchValue,
        setSearchValue,
        activeIcon,
        setActiveIcon,

        isSearchOpen,
        setIsSearchOpen,
        isSearchBarExpanded,
        setIsSearchBarExpanded,
        isSearchFocused,
        setIsSearchFocused,
        isProfilePressed,
        setIsProfilePressed,
        isMenuOpen,
        setIsMenuOpen,
        isMessengerOpen,
        setIsMessengerOpen,
        isNotificationOpen,
        setIsNotificationOpen,
        isAccountOpen,
        setIsAccountOpen,

        searchRef,
        modalRef,
        modalInputRef,

        handleModalToggle,
    };
};
