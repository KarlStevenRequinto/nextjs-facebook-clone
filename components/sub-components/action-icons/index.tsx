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
                transition-all duration-100 cursor-pointer transform
                ${
                    isActive
                        ? "bg-[var(--secondary-button-background)]"
                        : isPressed
                        ? "bg-[var(--background-100)]"
                        : "hover:bg-[var(--background-200)] bg-[var(--secondary-background)]"
                }
                ${isPressed ? "scale-95" : "scale-100"}
            `}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onClick={onClickIcon}
        >
            <div className={`transform transition-transform duration-100 ${isPressed ? "scale-95" : "scale-100"}`}>{icon}</div>
        </div>
    );
};

export default ActionIcons;
