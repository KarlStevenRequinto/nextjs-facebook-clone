import Image from "next/image";
import React from "react";
import { ChatItemProps } from "@/app/types";
import ChatNotifyIcon from "@/public/svg/chat-notify-icon";
import CommonGenericIcon from "@/public/generic-icons";
import { genericIconLinks } from "@/app/constants/dummy-data";

const ChatItems = ({}: ChatItemProps) => {
    return (
        <div className="chat-item-container group relative flex items-center justify-between px-2 py-2 hover:bg-[var(--background-300)] rounded-lg cursor-pointer">
            {/* Profile Image */}
            <div className="relative w-[56px] h-[56px] flex-shrink-0">
                <Image src="/images/chat-item-img.jpg" alt="chat-item-img" width={56} height={56} className="rounded-full border border-[#dadde1]" />

                <span className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-[var(--positive)] border-2 border-white rounded-full"></span>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center flex-grow px-3 min-w-0">
                <span className="font-semibold text-[15px] truncate">Lanky Dunk City Dynasty for a...</span>
                <span className="text-[13px] text-[var(--secondary-text)] truncate">Like Mike: Sa likod ya c ebab</span>
            </div>

            {/* Notification icon + mute */}
            <div className="flex flex-row items-center space-x-1 min-w-[40px]">
                <span className="w-[12px] h-[12px] bg-[var(--blue-100)] rounded-full" />
                <ChatNotifyIcon />
            </div>

            <div className="hovering-ellipsis hidden group-hover:flex bg-white absolute top-1/2 right-8 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full shadow-md z-10 border border-[var(--gray-100)] hover:bg-[var(--comment-background)]">
                <CommonGenericIcon
                    imageUrl={genericIconLinks.ellipsis}
                    backgroundPosition="0px -427px"
                    width="20px"
                    height="20px"
                    filter="var(--filter-secondary-icon)"
                />
            </div>
        </div>
    );
};

export default ChatItems;
