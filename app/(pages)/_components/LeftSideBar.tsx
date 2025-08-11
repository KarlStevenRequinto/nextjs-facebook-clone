import { homeSideBarItems } from "@/app/constants/dummy-data";
import SideBarItem from "@/components/sub-components/sidebar-item";
import ChevronUpIcon from "@/public/svg/chevron-up-icon";
import React from "react";

const LeftSideBar = () => {
    const chevronIcon = (
        <div className="w-[36px] h-[36px] bg-[var(--secondary-background)] flex items-center justify-center rounded-full">
            <ChevronUpIcon width="20" height="20" />
        </div>
    );
    return (
        <div className="mt-4 px-2">
            {homeSideBarItems.map((item) => (
                <SideBarItem
                    svgIcon={chevronIcon}
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
        </div>
    );
};

export default LeftSideBar;
