import React from "react";
import { ActionBtnProps } from "@/app/types";

const ActionButton = ({ title, actionBtnStyle, icon }: ActionBtnProps) => {
    return (
        <div
            className={`px-3 h-9 rounded-[8px] flex items-center justify-center label-text text-[var(--primary-black)] bg-[var(--secondary-background)] hover:bg-[color:var(--secondary-background-100)] cursor-pointer ${
                actionBtnStyle ?? ""
            }`}
        >
            {icon && <span className="mr-2 flex items-center justify-between">{icon}</span>}
            <span>{title}</span>
        </div>
    );
};

export default ActionButton;
