import React, { useState } from "react";
import RotatingArrowIcon from "../icon-components/rotating-arrow-icon";

interface ProfilePageItemProps {
    label?: string;
    image: string;
}
const ProfilePageItem = ({ label, image }: ProfilePageItemProps) => {
    const [angle, setAngle] = useState(0);

    const handleHover = () => {
        setAngle((prev) => prev + 180);
    };

    return (
        <div
            className="h-[52px] bg-white px-2 flex items-center hover:bg-[var(--background-300)] rounded-[8px] cursor-pointer "
            onMouseEnter={handleHover}
        >
            <RotatingArrowIcon width="32" height="32" angle={angle} image={image} />
            <div className="w-[223px] text-[color:var(--primary-black)] font-medium leading-[1.3333]">{label}</div>
        </div>
    );
};

export default ProfilePageItem;
