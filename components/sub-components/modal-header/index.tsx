import React from "react";
import { ModalHeaderProps } from "@/app/types";

const ModalHeader = ({ text }: ModalHeaderProps) => {
    return (
        <div className="py-3.5">
            <span className="inline-block align-top font-bold text-[24px] leading-[20px]">{text}</span>
        </div>
    );
};

export default ModalHeader;
