import React, { useState } from "react";

interface ActionIconsProps {
    icon?: React.ReactNode;
    iconHeight?: number;
    iconWidth?: number;
    onClickIcon: () => void;
    isActive?: boolean;
}

const ActionIcons = ({ icon, iconHeight, iconWidth, onClickIcon, isActive = false }: ActionIconsProps) => {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <div
            style={{ height: iconHeight, width: iconWidth }}
            className={`flex items-center justify-center rounded-full 
                transition-colors duration-200 cursor-pointer
                ${
                    isActive
                        ? "bg-[var(--secondary-button-background)]"
                        : isPressed
                        ? "bg-[var(--background-100)]"
                        : "hover:bg-[var(--background-200)] bg-[var(--secondary-background)]"
                }`}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onClick={onClickIcon}
        >
            {icon}
        </div>
    );
};

export default ActionIcons;
