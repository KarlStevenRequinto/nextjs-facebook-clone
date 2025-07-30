import React from "react";
import { ActionBtnProps } from "@/app/types";

const ActionButton = ({ title, actionBtnStyle }: ActionBtnProps) => {
    return <div className={`default-class-names ${actionBtnStyle ?? ""}`}>{title}</div>;
};

export default ActionButton;
