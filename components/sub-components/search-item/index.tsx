import ClockIcon from "@/public/svg/clock-icon";
import CloseIcon from "@/public/svg/close-icon";
import Image from "next/image";
import React from "react";

const SearchItem = () => {
    return (
        <div className="flex items-center justify-between bg-white rounded-lg py-1.5 pl-2 pr-[2px] hover:bg-[color:var(--comment-background)] transition-colors cursor-pointer w-full">
            {/* Left: Clock Icon */}
            <div className="w-[36px] h-[36px] bg-[color:var(--web-wash)] rounded-full flex items-center justify-center mr-3">
                <ClockIcon width="20" height="20" fillColor="var(--secondary-text)" />
            </div>

            {/* Middle: Name + Subtext */}
            <div className="flex flex-col flex-grow min-w-0">
                <span className="font-medium leading-[1.3333] text-ellipsis overflow-hidden whitespace-nowrap">Jed Vargas</span>

                <span className="flex items-center">
                    <span className="w-[8px] h-[8px] bg-[color:var(--blue-100)] rounded-full mr-2"></span>
                    <span className="text-[13px] text-[color:var(--secondary-text)] leading-[1.2308]">9+&nbsp;</span>
                    <span className="text-[13px] text-[color:var(--secondary-text)] leading-[1.2308]">new friend</span>
                </span>
            </div>

            {/* Right: Avatar + Close */}
            <div className="flex items-center ml-3">
                <div>
                    <Image width={36} height={36} src="/images/gaming-video-icon.png" alt="avatar" />
                </div>

                <div className="w-[40px] h-[40px] p-[6px] group">
                    <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-[color:var(--secondary-background)]">
                        <CloseIcon width="12" height="12" fillColor="var(--secondary-text)" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
