import ClockIcon from "@/public/svg/clock-icon";
import CloseIcon from "@/public/svg/close-icon";
import React from "react";

const SearchItem = () => {
    return (
        <div className="cursor-pointer bg-white">
            <div className="w-[36px] h-[36px] bg-[color:var(--web-wash)] rounded-full flex items-center justify-center">
                <ClockIcon width="20" height="20" fillColor="var(--secondary-text)" />
            </div>
            <div>
                <span className="font-medium leading-[1.3333]">Jed Vargas</span>
                <div>
                    <span>blue circle</span>
                    <span className="text-[13px] text-[color:var(--secondary-text)]">friend</span>
                </div>
            </div>
            <div className="w-[40px] h-[40px] p-[6px] group">
                <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-[color:var(--secondary-background)]">
                    <CloseIcon width="12" height="12" fillColor="var(--secondary-text)" />
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
