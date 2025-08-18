import React from "react";
import SideBarItem from "@/components/sub-components/sidebar-item";
import Divider from "@/components/sub-components/divider";
import ActionButton from "@/components/sub-components/action-button";
import { AccountModalProps } from "@/app/types";
import { accountModalItems } from "@/app/constants/dummy-data";
import CommonGenericIcon from "@/components/sub-components/icon-components/generic-icons";
import ProfilePageItem from "@/components/sub-components/profile-page-item";
import MiniFooter from "@/components/sub-components/mini-footer";

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

                <ProfilePageItem label="Kilos At Gawa" image="/icons/facebook-icon.png" />
                <ProfilePageItem label="Lanky Nation Gaming" image="/icons/facebook-icon.png" />

                <div className="py-1">
                    <Divider />
                </div>

                <div className="my-2 ">
                    <ActionButton
                        title="See all profiles"
                        actionBtnStyle={"mx-2"}
                        icon={
                            <CommonGenericIcon
                                imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/uKFDlQgEw6u.png"
                                backgroundPosition="0px -302px"
                                width="16px"
                                height="16px"
                            />
                        }
                    />
                </div>
            </div>

            <div className="pt-4">
                {accountModalItems.map((item, index) => {
                    return (
                        <SideBarItem
                            key={index}
                            isLeftIcon={true}
                            leftIconbgPosition={item.leftIcon.iconPosition}
                            leftIconUrl={item.leftIcon.url}
                            leftIconWidth={item.leftIcon.iconWidth}
                            leftIconHeight={item.leftIcon.iconHeight}
                            rightIconUrl={item.rightIcon?.url ?? undefined}
                            rightIconWidth={item.rightIcon?.iconWidth ?? undefined}
                            rightIconHeight={item.rightIcon?.iconHeight ?? undefined}
                            rightIconbgPosition={item.rightIcon?.iconPosition ?? undefined}
                            label={item.text}
                            subText={item.subText ?? undefined}
                        />
                    );
                })}

                <MiniFooter />
            </div>
        </div>
    );
};

export default AccountModal;
