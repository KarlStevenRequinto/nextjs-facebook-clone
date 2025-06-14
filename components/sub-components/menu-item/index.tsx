import Image from "next/image";
import React from "react";

interface MenuItemProps {
    title: string;
    description: string;
    imgSource: string;
    imgWidth?: number;
    imgHeight?: number;
}

const MenuItem = ({ description, title, imgSource, imgWidth, imgHeight }: MenuItemProps) => {
    return (
        <div className="flex items-center bg-amber-300 rounded-lg p-2 hover:bg-[color:var(--comment-background)] transition-colors cursor-pointer w-full">
            <div className="px-1.5">
                <Image width={imgWidth} height={imgHeight} alt={`${title} Icon`} src={imgSource} />
            </div>
            <div className="flex flex-col text-[color:var(--primary-black)] px-1.5">
                <span className="font-semibold ">{title}</span>
                <span className="text-[13px] leading-[18.166px]">{description}</span>
            </div>
        </div>
    );
};

export default MenuItem;
