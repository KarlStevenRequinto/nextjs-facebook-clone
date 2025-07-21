import Image from "next/image";
import React from "react";
import { ChatItemProps } from "@/app/types";

const ChatItems = ({}: ChatItemProps) => {
    return (
        <div className="flex items-center justify-between py-2 hover:bg-[var(--background-300)] rounded-lg cursor-pointer">
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
            <div className="flex flex-col items-end space-y-1 min-w-[40px]">
                <span className="w-[12px] h-[12px] bg-[var(--blue-100)] rounded-full" />
            </div>
        </div>
    );
};

export default ChatItems;
