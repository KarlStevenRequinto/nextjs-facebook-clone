import React from "react";
import Image from "next/image";
interface MediaActionProps {
    altText: string;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    label?: string;
}
const MediaActionButton = ({ altText, imageSrc, imageWidth, imageHeight, label }: MediaActionProps) => {
    return (
        <div
            className="h-[40px] p-2 flex items-center justify-center bg-white hover:bg-[#E4E6EB] rounded-[8px] cursor-pointer"
            style={{ width: "clamp(160px, 16.875vw, 216px)" }}
        >
            <span className="mr-2">
                <Image src={imageSrc} alt={altText} width={imageWidth} height={imageHeight} className="object-cover" />
            </span>
            <div className="label-text">{label}</div>
        </div>
    );
};

export default MediaActionButton;
