import React from "react";

interface ClockIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const ClockIcon = ({ width, height, fillColor }: ClockIconProps) => {
    return (
        <svg viewBox="0 0 20 20" width={width} height={height} fill={fillColor}>
            <path d="M10.75 5.75a.75.75 0 0 0-1.5 0V10c0 .199.079.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V5.75z"></path>
            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"></path>
        </svg>
    );
};

export default ClockIcon;
