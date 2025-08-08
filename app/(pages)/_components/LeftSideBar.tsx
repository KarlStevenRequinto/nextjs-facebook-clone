import { homeSideBarItems } from "@/app/constants/dummy-data";
import SideBarItem from "@/components/sub-components/sidebar-item";
import React from "react";

const LeftSideBar = () => {
    return (
        <div className="mt-4 px-2">
            {homeSideBarItems.map((item) => (
                <SideBarItem
                    isLeftIcon={false}
                    leftIconUrl={item.iconUrl}
                    leftIconAltText={item.label}
                    leftIconWidth={36}
                    leftIconHeight={36}
                    key={item.label}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default LeftSideBar;
