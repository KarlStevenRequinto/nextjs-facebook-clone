import React from "react";
import { IconProps } from "@/app/types";

const LifeEventIcon = ({ width, height }: IconProps) => {
    return (
        <i
            data-visualcompletion="css-img"
            aria-hidden="true"
            style={{
                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v4/yE/r/KffMN1puaIC.png")',
                backgroundPosition: "0px -256px",
                backgroundSize: "auto",
                width: width,
                height: height,
                backgroundRepeat: "no-repeat",
                display: "inline-block",
            }}
        ></i>
    );
};

export default LifeEventIcon;
