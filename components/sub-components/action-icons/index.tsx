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
    const [isHovered, setIsHovered] = useState(false);

    const getBackgroundColor = () => {
        if (isActive) {
            if (isPressed) return "bg-[var(--blue-button-background-200)]";
            if (isHovered) return "bg-[var(--blue-button-background-100)]";
            return "bg-[var(--secondary-button-background)]";
        } else {
            if (isPressed) return "bg-[var(--background-100)]";
            if (isHovered) return "bg-[var(--background-200)]";
            return "bg-[var(--secondary-background)]";
        }
    };

    return (
        <div
            style={{ height: iconHeight, width: iconWidth }}
            className={`flex items-center justify-center rounded-full transform transition-all duration-100 cursor-pointer ${getBackgroundColor()} ${
                isPressed ? "scale-96" : "scale-100"
            }`}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onMouseEnter={() => setIsHovered(true)}
            onClick={onClickIcon}
        >
            <div className={`transform transition-transform duration-100 ${isPressed ? "scale-96" : "scale-100"}`}>{icon}</div>
        </div>
    );
};

export default ActionIcons;
