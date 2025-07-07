import Image from "next/image";
import React from "react";

interface MenuItemProps {
    title: string;
    description: string;
    imgSource: string;
    imgWidth?: number;
    imgHeight?: number;
    imgStyle?: React.CSSProperties;
}

const MenuItem = ({ description, title, imgSource, imgWidth, imgHeight, imgStyle }: MenuItemProps) => {
    return (
        <div className="bg-white flex items-center rounded-lg p-2 hover:bg-[color:var(--backgorund-300)] transition-colors cursor-pointer w-full">
            <Image width={imgWidth} height={imgHeight} alt={`${title} Icon`} src={imgSource} style={imgStyle} />

            <div className="flex flex-col text-[color:var(--primary-black)] px-1.5">
                <span className="font-semibold ">{title}</span>
                <span className="text-[13px] leading-[18.166px]">{description}</span>
            </div>
        </div>
    );
};

export default MenuItem;
