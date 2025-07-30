import React, { useState } from "react";
import ModalHeader from "@/components/sub-components/modal-header";
import CommonGenericIcon from "@/public/generic-icons/common-generic-icon";
import { genericIconLinks } from "@/app/constants/dummy-data";
import { menuHeaderProps } from "@/app/types";
import ChatItems from "@/components/sub-components/chat-items";
import PostActionButton from "@/components/sub-components/post-action-button";
import ActionButton from "@/components/sub-components/action-button";
interface NotificationModalProps {
    isNotificationOpen: boolean;
}

const MenuHeader = ({ title }: menuHeaderProps) => {
    return <h3 className="text-[17px] font-medium px-2">{title}</h3>;
};

const NotificationModal = ({ isNotificationOpen }: NotificationModalProps) => {
    if (!isNotificationOpen) return null;
    const [activeTab, setActiveTab] = useState("All");
    const notificationTabs = ["All", "Unread"];

    return (
        <div className="w-[360px] bg-white common-shadow-styling-container">
            <div className="flex items-center justify-between px-4">
                <ModalHeader text="Notifications" />

                <div className="flex items-center justify-between gap-5 px-1">
                    <CommonGenericIcon
                        imageUrl={genericIconLinks.ellipsis}
                        backgroundPosition="0px -427px"
                        width="20px"
                        height="20px"
                        filter="var(--filter-secondary-icon)"
                    />
                </div>
            </div>

            <div className="flex gap-2 px-4">
                {notificationTabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center justify-center font-medium rounded-full cursor-pointer h-9 px-3 ${
                            activeTab === tab ? "bg-[var(--secondary-button-background)] text-[var(--blue-100)]" : "hover:bg-[var(--background-300)]"
                        }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="flex gap-2 px-2 mt-2">
                <MenuHeader title="Earlier" />
                <span>See all</span>
            </div>

            <div className="p-2">
                {activeTab === "All" && (
                    <div>
                        <ChatItems />
                    </div>
                )}
                {activeTab === "Unread" && <div>Unread</div>}
            </div>

            <div>
                <ActionButton title="See previous notifications" />
            </div>
        </div>
    );
};

export default NotificationModal;
