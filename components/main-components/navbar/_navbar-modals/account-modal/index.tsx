import React from "react";
import SideBarItem from "@/components/sub-components/sidebar-item";
import Divider from "@/components/sub-components/divider";
import ActionButton from "@/components/sub-components/action-button";
import { AccountModalProps } from "@/app/types";
import { accountModalItems } from "@/app/constants/dummy-data";

const AccountModal = ({ isAccountOpen }: AccountModalProps) => {
    if (!isAccountOpen) return null;

    return (
        <div className="w-[360px] bg-white common-shadow-styling-container shadow-100 py-3 px-4">
            <div className="shadow-200 rounded-lg p-1">
                <SideBarItem
                    isLeftIcon={false}
                    leftIconAltText="test alt"
                    leftIconUrl="/icons/facebook-icon.png"
                    leftIconHeight={36}
                    leftIconWidth={36}
                    label="Lerd Robott"
                />
                <div className="py-1 ">
                    <Divider />
                </div>

                <SideBarItem
                    isLeftIcon={false}
                    leftIconAltText="test alt"
                    leftIconUrl="/icons/facebook-icon.png"
                    leftIconHeight={36}
                    leftIconWidth={36}
                    label="Lerd Robott"
                />
                <SideBarItem
                    isLeftIcon={false}
                    leftIconAltText="test alt"
                    leftIconUrl="/icons/facebook-icon.png"
                    leftIconHeight={36}
                    leftIconWidth={36}
                    label="Lerd Robott"
                />

                <div className="py-1">
                    <Divider />
                </div>

                <div className="my-2">
                    <ActionButton title="See all profiles" actionBtnStyle={"mx-2"} />
                </div>
            </div>

            <div className="pt-4">
                {accountModalItems.map((item, index) => {
                    console.log("item.rightIconWidth: ", item.rightIcon?.iconWidth ?? "no right icon");
                    return (
                        <SideBarItem
                            key={index}
                            isLeftIcon={false}
                            leftIconbgPosition={item.leftIcon.iconPosition}
                            leftIconWidth={item.leftIcon.iconWidth}
                            leftIconHeight={item.leftIcon.iconHeight}
                            rightIconUrl={item.rightIcon?.url ?? undefined}
                            rightIconWidth={item.rightIcon?.iconWidth ?? undefined}
                            rightIconHeight={item.rightIcon?.iconHeight ?? undefined}
                            rightIconbgPosition={item.rightIcon?.iconPosition ?? undefined}
                            label={item.text}
                        />
                    );
                })}

                <span>Privacy Terms Advertising Ad Choices Cookies More Meta © 2025</span>
            </div>
        </div>
    );
};

export default AccountModal;
