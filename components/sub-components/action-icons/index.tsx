import React from "react";

interface ActionIconsProps {
    isForIcon: boolean;
    icon?: React.ReactNode;
    iconHeight?: number;
    iconWidth?: number;
    imageSrc?: string;
    imageAlt?: string;
    imageHeight?: number;
    imageWidth?: number;
}

const ActionIcons = ({
    isForIcon,
    icon,
    iconHeight = 20,
    iconWidth = 20,
    imageSrc,
    imageAlt = "profile picture or icon",
    imageHeight = 40,
    imageWidth = 40,
}: ActionIconsProps) => {
    return <div>ActionIcons</div>;
};

export default ActionIcons;
