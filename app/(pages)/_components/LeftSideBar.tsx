import { homeSideBarItems } from "@/app/constants/dummy-data";
import Divider from "@/components/sub-components/divider";
import SideBarItem from "@/components/sub-components/sidebar-item";
import ChevronDownIcon from "@/public/svg/chevron-down-icon";
import ChevronUpIcon from "@/public/svg/chevron-up-icon";
import React, { useState, useMemo } from "react";

const LeftSideBar = () => {
    const [expanded, setExpanded] = useState(true); // show all by default

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
    return (
        <div className="mt-4 px-2">
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
            <Divider />
        </div>
    );
};

export default LeftSideBar;
