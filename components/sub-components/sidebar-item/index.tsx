import Image from "next/image";
import React from "react";
import CommonGenericIcon from "../icon-components/generic-icons";

interface SideBarItemProps {
    isLeftIcon: boolean;
    leftIconbgPosition?: string;
    leftIconUrl?: string;
    leftIconAltText?: string;
    leftIconWidth: number | string;
    leftIconHeight: number | string;

    rightIconAltText?: string;
    rightIconbgPosition?: string;
    rightIconUrl?: string;
    rightIconWidth?: number | string;
    rightIconHeight?: number | string;
    label?: string;
}

const SideBarItem = ({
    isLeftIcon,
    leftIconbgPosition,
    leftIconAltText,
    leftIconUrl,
    rightIconUrl,
    leftIconWidth,
    leftIconHeight,
    label,
    rightIconWidth,
    rightIconHeight,
    rightIconbgPosition,
}: SideBarItemProps) => {
    const showRightIcon = !!rightIconUrl && typeof rightIconWidth !== "undefined" && typeof rightIconHeight !== "undefined";
    console.log("isLeftIcon: ", isLeftIcon);
    console.log("leftIconbgPosition: ", leftIconbgPosition);
    console.log("leftIconUrl: ", leftIconUrl);
    console.log("leftIconWidth: ", leftIconWidth);
    console.log("leftIconHeight: ", leftIconHeight);
    return (
        <div className="h-[52px] px-2 flex items-center bg-white hover:bg-[var(--background-300)] rounded-[8px] cursor-pointer">
            <div className="my-2 mr-3">
                {isLeftIcon ? (
                    <CommonGenericIcon
                        imageUrl={leftIconUrl}
                        backgroundPosition={leftIconbgPosition}
                        width={`${String(leftIconWidth)}px`}
                        height={`${String(leftIconHeight)}px`}
                    />
                ) : (
                    leftIconUrl &&
                    leftIconAltText && (
                        <Image
                            src={leftIconUrl}
                            alt={leftIconAltText}
                            width={typeof leftIconWidth === "number" ? leftIconWidth : parseInt(leftIconWidth)}
                            height={typeof leftIconHeight === "number" ? leftIconHeight : parseInt(leftIconHeight)}
                            className="object-cover"
                        />
                    )
                )}
            </div>
            <div className="w-[223px] text-[color:var(--primary-black)] font-medium leading-[1.3333]">{label}</div>
            {showRightIcon && (
                <div className="ml-auto">
                    <CommonGenericIcon
                        imageUrl={rightIconUrl}
                        width={`${String(leftIconWidth)}px`}
                        height={`${String(leftIconHeight)}px`}
                        backgroundPosition={rightIconbgPosition}
                    />
                </div>
            )}
        </div>
    );
};

export default SideBarItem;
