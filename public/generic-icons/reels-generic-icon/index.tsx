import React from "react";
import { IconProps } from "@/app/types";

const ReelsGenericIcon = ({ width, height }: IconProps) => {
    return (
        <i
            data-visualcompletion="css-img"
            aria-hidden="true"
            style={{
                backgroundImage:
                    'url("https://static.xx.fbcdn.net/rsrc.php/v4/yJ/r/_0cCaNMSLoE.png?_nc_eui2=AeFOP2NRNBFq_quxF2Fg-hRCBeq9mdFcqOwF6r2Z0Vyo7LTnQqEFShK6VreGsDghOB07UQXm0JwnJpTeZz4JYN0b")',
                backgroundPosition: "0px -96px",
                backgroundSize: "auto",
                width: width,
                height: height,
                backgroundRepeat: "no-repeat",
                display: "inline-block",
            }}
        ></i>
    );
};

export default ReelsGenericIcon;
