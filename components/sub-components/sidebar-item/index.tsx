import Image from "next/image";
import React from "react";

interface SideBarItemProps {
    altText: string;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    label?: string;
}

const SideBarItem = ({ altText, imageSrc, imageWidth, imageHeight, label }: SideBarItemProps) => {
    return (
        <div className="h-[52px] px-2 flex items-center bg-white hover:bg-[var(--background-300)] rounded-[8px] cursor-pointer">
            <div className="my-2 mr-3">
                <Image src={imageSrc} alt={altText} width={imageWidth} height={imageHeight} className="object-cover" />
            </div>
            <div className="w-[223px] text-[color:var(--primary-black)] font-medium leading-[1.3333]">{label}</div>
        </div>
    );
};

export default SideBarItem;
