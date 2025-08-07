"use client";
import CommonGenericIcon from "@/components/sub-components/icon-components/generic-icons";
import RotatingArrowIcon from "@/components/sub-components/icon-components/rotating-arrow-icon";
import ProfilePageItem from "@/components/sub-components/profile-page-item";
import SideBarItem from "@/components/sub-components/sidebar-item";
import React, { useState } from "react";

const WatchPage = () => {
    const [angle, setAngle] = useState(0);

    const handleHover = () => {
        setAngle((prev) => prev + 180);
    };

    return (
        <div>
            <CommonGenericIcon
                imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/SMANj1BDJfv.png"
                backgroundPosition="0px -370px"
                height="36px"
                width="36px"
            />
            <ProfilePageItem label="Kilos At Gawa" image="/icons/facebook-icon.png" />
            <ProfilePageItem label="Lanky Nation Gaming" image="/icons/facebook-icon.png" />
        </div>
    );
};

export default WatchPage;
