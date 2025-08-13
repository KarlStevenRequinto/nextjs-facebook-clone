import { homeSideBarItems, yourShortcuts } from "@/app/constants/dummy-data";
import Divider from "@/components/sub-components/divider";
import SideBarItem from "@/components/sub-components/sidebar-item";
import ChevronDownIcon from "@/public/svg/chevron-down-icon";
import ChevronUpIcon from "@/public/svg/chevron-up-icon";
import React, { useState, useMemo } from "react";

const LeftSideBar = () => {
    const [expanded, setExpanded] = useState(true);
    const [expandedShortcuts, setExpandedShortcuts] = useState(true);
    const cutoffIndex = useMemo(() => {
        const idx = homeSideBarItems.findIndex((i) => i.label === "Marketplace");
        return idx === -1 ? homeSideBarItems.length - 1 : idx;
    }, []);

    const visibleItems = expanded ? homeSideBarItems : homeSideBarItems.slice(0, cutoffIndex + 1);

    const chevronIcon = (
        <div className="w-[36px] h-[36px] bg-[var(--secondary-background)] flex items-center justify-center rounded-full">
            <div className={`${expanded ? "" : "rotate-180"} transition-transform`}>
                {expanded ? <ChevronUpIcon width="20" height="20" /> : <ChevronDownIcon width="20" height="20" />}
            </div>
        </div>
    );

    const chevronIconShortcut = (
        <div className="w-[36px] h-[36px] bg-[var(--secondary-background)] flex items-center justify-center rounded-full">
            <div className={`${expandedShortcuts ? "" : "rotate-180"} transition-transform`}>
                {expanded ? <ChevronUpIcon width="20" height="20" /> : <ChevronDownIcon width="20" height="20" />}
            </div>
        </div>
    );

    return (
        <div className="mt-4 px-2">
            <div className="mb-2">
                {visibleItems.map((item) => (
                    <SideBarItem
                        isSVG={item.isSVG}
                        isLeftIcon={item.isCommonIcon}
                        leftIconUrl={item.iconUrl}
                        leftIconAltText={item.label}
                        leftIconWidth={36}
                        leftIconHeight={36}
                        key={item.label}
                        label={item.label}
                        leftIconbgPosition={item.bgPosition}
                    />
                ))}

                <SideBarItem
                    svgIcon={chevronIcon}
                    isLeftIcon={true}
                    isSVG={true}
                    leftIconWidth={36}
                    leftIconHeight={36}
                    label={expanded ? "See less" : "See more"}
                    onClick={() => setExpanded((v) => !v)}
                />
            </div>
            <Divider />

            <div>
                <span className="inline-block font-medium align-top text-[17px] leading-[20px] pt-3.5 mb-2.5 px-2 text-[var(--secondary-text)]">
                    Your shortcuts
                </span>
                {yourShortcuts.map((item) => (
                    <SideBarItem
                        isSVG={item.isSVG}
                        isLeftIcon={item.isCommonIcon}
                        leftIconAltText={item.label}
                        label={item.label}
                        leftIconWidth={36}
                        leftIconHeight={36}
                        key={item.label}
                        leftIconUrl={item.iconUrl}
                    />
                ))}
                <SideBarItem
                    svgIcon={chevronIconShortcut}
                    isLeftIcon={true}
                    isSVG={true}
                    leftIconWidth={36}
                    leftIconHeight={36}
                    label={expandedShortcuts ? "See less" : "See more"}
                    onClick={() => setExpandedShortcuts((v) => !v)}
                />
            </div>
        </div>
    );
};

export default LeftSideBar;
