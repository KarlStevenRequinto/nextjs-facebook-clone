import React, { useState } from "react";
import ModalHeader from "@/components/sub-components/modal-header";
import { MessengerModalProps } from "@/app/types";
import CommonGenericIcon from "@/public/generic-icons";
import { genericIconLinks } from "@/app/constants/dummy-data";
import SearchBar from "@/components/sub-components/search-bar";
import ChatItems from "@/components/sub-components/chat-items";
const MessengerModal = ({ isMessengerOpen }: MessengerModalProps) => {
    if (!isMessengerOpen) return null;
    const [activeTab, setActiveTab] = useState("All");
    const messengerTabs = ["All", "Unread", "Groups", "Communities"];

    return (
        <div className="w-[360px] bg-white common-shadow-styling-container">
            <div className="flex items-center justify-between px-4">
                <ModalHeader text="Chats" />

                <div className="flex items-center justify-between gap-5 px-1">
                    <CommonGenericIcon
                        imageUrl={genericIconLinks.ellipsis}
                        backgroundPosition="0px -427px"
                        width="20px"
                        height="20px"
                        filter="var(--filter-secondary-icon)"
                    />

                    <CommonGenericIcon
                        imageUrl={genericIconLinks.expand}
                        backgroundPosition="0px -506px"
                        width="20px"
                        height="20px"
                        filter="var(--filter-secondary-icon)"
                    />

                    <CommonGenericIcon
                        imageUrl={genericIconLinks.newMsg}
                        backgroundPosition="-17px -545px"
                        width="20px"
                        height="20px"
                        filter="var(--filter-secondary-icon)"
                    />
                </div>
            </div>
            <div className="px-2">
                <SearchBar placeholder="Search Messenger" />
            </div>

            {/* All Unread Groups Communities navigation here */}
            <div className="flex gap-2 px-3 py-2">
                {messengerTabs.map((tab) => (
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

            {/* contents / items here */}
            <div className="p-2">
                {activeTab === "All" && (
                    <div>
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                        <ChatItems />
                    </div>
                )}
                {activeTab === "Unread" && <div>Unread</div>}
                {activeTab === "Groups" && <div>Groups</div>}
                {activeTab === "Communities" && <div>Communities</div>}
            </div>
        </div>
    );
};

export default MessengerModal;
