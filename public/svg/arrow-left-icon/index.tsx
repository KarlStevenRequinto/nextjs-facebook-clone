import React from "react";

interface ArrowLeftIconProps {
    width: string;
    height: string;
    fillColor?: string;
}

const ArrowLeftIcon = ({ width, height, fillColor }: ArrowLeftIconProps) => {
    return (
        <svg viewBox="0 0 20 20" width={width} height={height} fill={fillColor}>
            <g fillRule="evenodd" transform="translate(-446 -350)">
                <g fillRule="nonzero">
                    <path
                        d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
                        transform="translate(355 153.5)"
                    ></path>
                    <path d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z" transform="translate(355 153.5)"></path>
                </g>
            </g>
        </svg>
    );
};

export default ArrowLeftIcon;
