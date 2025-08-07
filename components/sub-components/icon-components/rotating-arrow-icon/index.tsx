import Image from "next/image";
import React from "react";

interface RotatingArrowProps {
    angle: number;
    width?: string | number;
    height?: string | number;
    image: string;
}

const RotatingArrowIcon = ({ angle, width, height, image }: RotatingArrowProps) => {
    return (
        <div className="w-fit cursor-pointer relative">
            <svg
                viewBox="0 0 20 20"
                width={width}
                height={height}
                fill="currentColor"
                aria-hidden="true"
                style={{ transform: `rotate(${angle}deg)` }}
                className="transition-transform duration-300 ease-in-out"
            >
                <g fillRule="evenodd" transform="translate(-446 -398)">
                    <g fillRule="nonzero">
                        <path
                            d="M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z"
                            transform="translate(352 204.5)"
                        ></path>
                        <path
                            d="M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z"
                            transform="translate(352 204.5)"
                        ></path>
                    </g>
                </g>
            </svg>
            <Image
                src={image}
                alt="center icon"
                className="absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                width={20}
                height={20}
            />
        </div>
    );
};

export default RotatingArrowIcon;
