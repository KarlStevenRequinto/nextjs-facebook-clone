import React, { useState, useEffect } from "react";
import Tooltip from "../tooltip";
interface NavigationButtonProps {
    icon?: React.ReactNode;
    onClickBtn?: () => void;
    isActive?: boolean;
    tooltipText?: string;
}

const NavigationButton = ({ icon, onClickBtn, isActive = false, tooltipText = "Tooltip" }: NavigationButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        if (isHovered) {
            timeout = setTimeout(() => {
                setShowTooltip(true);
            }, 500); // delay of 0.5s
        } else {
            if (timeout) clearTimeout(timeout);
            setShowTooltip(false);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isHovered]);

    return (
        <div
            className="group relative w-[130px] h-[56px] flex items-center justify-center py-1 cursor-pointer"
            onClick={onClickBtn}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`w-full h-full flex items-center justify-center rounded-[8px] ${!isActive ? "group-hover:bg-[color:#f2f2f2]" : ""}`}>
                {icon}
            </div>
            <div
                className={`absolute top-full mt-[-1px] transition-opacity duration-300 pointer-events-none ${
                    showTooltip ? "opacity-100" : "opacity-0"
                }`}
            >
                <Tooltip text={tooltipText} />
            </div>
            <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--primary-button-background)] rounded-t-[1px] transform transition-transform duration-300 ease-out ${
                    isActive ? "scale-y-100" : "scale-y-0"
                } origin-bottom`}
            />
        </div>
    );
};

export default NavigationButton;
