import React, { useState, useRef, useEffect } from "react";

export const useViewModel = () => {
    const [activeTab, setActiveTab] = useState("/");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef<HTMLInputElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const modalInputRef = useRef<HTMLInputElement | null>(null);

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
        isSearchOpen,
        setIsSearchOpen,
        isSearchBarExpanded,
        setIsSearchBarExpanded,
        isSearchFocused,
        setIsSearchFocused,
        searchValue,
        setSearchValue,
        searchRef,
        modalRef,
        modalInputRef,
    };
};
