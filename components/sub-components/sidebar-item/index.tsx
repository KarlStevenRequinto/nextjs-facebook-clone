import Image from "next/image";
import React from "react";
import CommonGenericIcon from "../icon-components/generic-icons";

interface SideBarItemProps {
    isLeftIcon: boolean;
    isSVG?: boolean;
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
    subText?: string;
    svgIcon?: React.ReactNode;

    onClick?: () => void;
}

const SideBarItem = ({
    isLeftIcon,
    isSVG,
    leftIconbgPosition,
    leftIconAltText,
    leftIconUrl,
    rightIconUrl,
    leftIconWidth,
    leftIconHeight,
    label,
    subText,
    rightIconWidth,
    rightIconHeight,
    rightIconbgPosition,
    svgIcon,
    onClick,
}: SideBarItemProps) => {
    const showRightIcon = !!rightIconUrl && typeof rightIconWidth !== "undefined" && typeof rightIconHeight !== "undefined";
    return (
        <div
            className="h-[52px] px-2 flex items-center hover:bg-[var(--background-300)] rounded-[8px] cursor-pointer"
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            <div className="my-2 mr-3 flex items-center">
                {isLeftIcon ? (
                    isSVG ? (
                        svgIcon
                    ) : (
                        <CommonGenericIcon
                            imageUrl={leftIconUrl}
                            backgroundPosition={leftIconbgPosition}
                            width={`${String(leftIconWidth)}px`}
                            height={`${String(leftIconHeight)}px`}
                        />
                    )
                ) : (
                    leftIconUrl &&
                    leftIconAltText && (
                        <Image
                            src={leftIconUrl}
                            alt={leftIconAltText}
                            width={typeof leftIconWidth === "number" ? leftIconWidth : parseInt(leftIconWidth)}
                            height={typeof leftIconHeight === "number" ? leftIconHeight : parseInt(leftIconHeight)}
                            className="object-cover rounded-full"
                        />
                    )
                )}
            </div>
            <div className="flex flex-col">
                <div className="w-[223px] text-[color:var(--primary-black)] font-medium leading-[1.3333]">{label}</div>
                {subText && <span>{subText}</span>}
            </div>

            <div className="ml-auto flex items-center">
                {showRightIcon && (
                    <CommonGenericIcon
                        imageUrl={rightIconUrl}
                        width={`${String(rightIconWidth)}px`}
                        height={`${String(rightIconHeight)}px`}
                        backgroundPosition={rightIconbgPosition}
                    />
                )}
            </div>
        </div>
    );
};

export default SideBarItem;
