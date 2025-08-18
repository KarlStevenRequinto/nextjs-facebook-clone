import React from "react";
import CommonGenericIcon from "../icon-components/generic-icons";

interface MiniFooterProps {
    miniFooterStyleProp?: string;
}

const MiniFooter = ({ miniFooterStyleProp }: MiniFooterProps) => {
    return (
        <div
            className={`${miniFooterStyleProp} bottom-4 left-2 right-0 text-[var(--secondary-text)] text-[13px] leading-[13px] mt-2 px-2 flex flex-wrap items-center gap-1`}
        >
            <a className="font-medium">Privacy</a>
            <span>·</span>
            <a className="font-medium">Terms</a>
            <span>·</span>
            <a className="font-medium">Advertising</a>
            <span>·</span> <a className="font-medium">Ad Choices</a>
            <CommonGenericIcon
                imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/g7l6EV9FO6y.png"
                backgroundPosition="0px -929px"
                width="12px"
                height="12px"
                filter="var(--filter-secondary-icon)"
                iconStyleProp="relative top-[4px]"
            />
            <span>·</span> <a className="font-medium">Cookies</a>
            <span>·</span>
            <a className="font-mono">More</a>
        </div>
    );
};

export default MiniFooter;
