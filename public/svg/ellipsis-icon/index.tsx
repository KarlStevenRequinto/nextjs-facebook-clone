import React from "react";

interface EllipsisIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const EllipsisIcon = ({ width, height, fillColor }: EllipsisIconProps) => {
    return (
        <svg viewBox="0 0 20 20" width={width} height={height} fill={fillColor}>
            <g fill-rule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
            </g>
        </svg>
    );
};

export default EllipsisIcon;
