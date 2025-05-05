import React from "react";

interface ChevronUpIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const ChevronUpIcon = ({ width, height, fillColor }: ChevronUpIconProps) => {
    return (
        <svg viewBox="0 0 20 20" width={width} height={height} fill={fillColor} aria-hidden="true">
            <path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path>
        </svg>
    );
};

export default ChevronUpIcon;
