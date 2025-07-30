import React from "react";
import SideBarItem from "@/components/sub-components/sidebar-item";
import Divider from "@/components/sub-components/divider";
import ActionButton from "@/components/sub-components/action-button";
import { AccountModalProps } from "@/app/types";

const AccountModal = ({ isAccountOpen }: AccountModalProps) => {
    if (!isAccountOpen) return null;

    return (
        <div className="w-[360px] bg-white common-shadow-styling-container">
            <div>
                <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
                <Divider />
                <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            </div>

            <div>
                <ActionButton title="See all profiles" />
            </div>

            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />

            <div>
                <span>Privacy Terms Advertising Ad Choices Cookies More Meta © 2025</span>
            </div>
        </div>
    );
};

export default AccountModal;
