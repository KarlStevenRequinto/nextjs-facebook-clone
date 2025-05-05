import React from "react";

interface CloseIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const CloseIcon = ({ width, height, fillColor }: CloseIconProps) => {
    return (
        <svg viewBox="0 0 20 20" width={width} height={height} fill={fillColor} aria-hidden="true">
            <path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z"></path>
        </svg>
    );
};

export default CloseIcon;
