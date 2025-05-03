import { on } from "events";
import React from "react";

interface ActionIconsProps {
    icon?: React.ReactNode;
    iconHeight?: number;
    iconWidth?: number;
    onClickIcon: () => void;
}

const ActionIcons = ({ icon, iconHeight, iconWidth, onClickIcon }: ActionIconsProps) => {
    return (
        <div
            style={{ height: iconHeight, width: iconWidth }}
            className={`flex items-center justify-center rounded-full bg-[#E2E5E9] hover:bg-[#d9dcdf] transition-colors duration-200 cursor-pointer`}
            onClick={onClickIcon}
        >
            {icon}
        </div>
    );
};

export default ActionIcons;
