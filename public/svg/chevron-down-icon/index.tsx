import React from "react";

interface ChevronDownIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const ChevronDownIcon = ({ width, height, fillColor }: ChevronDownIconProps) => {
    return (
        <svg viewBox="0 0 16 16" width={width} height={height} fill={fillColor} aria-hidden="true" className="rotate-180">
            <g fillRule="evenodd" transform="translate(-448 -544)">
                <path
                    fillRule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                ></path>
            </g>
        </svg>
    );
};

export default ChevronDownIcon;
