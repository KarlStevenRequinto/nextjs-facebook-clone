import React from "react";
import { CommonGenericIconProps } from "@/app/types";

const CommonGenericIcon = ({ width, height, imageUrl, filter, backgroundPosition }: CommonGenericIconProps) => {
    return (
        <i
            data-visualcompletion="css-img"
            aria-hidden="true"
            style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundPosition: backgroundPosition,
                backgroundSize: "auto",
                width: width,
                height: height,
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                filter: filter,
            }}
        ></i>
    );
};

export default CommonGenericIcon;
