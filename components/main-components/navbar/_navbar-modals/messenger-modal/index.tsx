import React, { useState } from "react";
import ModalHeader from "@/components/sub-components/modal-header";
import { MessengerModalProps } from "@/app/types";
import CommonGenericIcon from "@/public/generic-icons/common-generic-icon";
import { genericIconLinks } from "@/app/constants/dummy-data";
import SearchBar from "@/components/sub-components/search-bar";
const MessengerModal = ({ isMessengerOpen }: MessengerModalProps) => {
    if (!isMessengerOpen) return null;
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Unread", "Groups", "Communities"];

    return (
        <div className="w-[360px] bg-white common-shadow-styling-container">
            <div className="flex items-center justify-between ">
                <ModalHeader text="Chats" />
                <div className="flex items-center">
                    <div>
                        <CommonGenericIcon imageUrl={genericIconLinks.ellipsis} backgroundPosition="0px -427px" width="20px" height="20px" />
                    </div>
                    <div>
                        <CommonGenericIcon imageUrl={genericIconLinks.expand} backgroundPosition="0px -506px" width="20px" height="20px" />
                    </div>
                    <div>
                        <CommonGenericIcon imageUrl={genericIconLinks.newMsg} backgroundPosition="-17px -545px" width="20px" height="20px" />
                    </div>
                </div>
            </div>
            <SearchBar />

            {/* All Unread Groups Communities navigation here */}
            <div className="flex gap-2 px-3 py-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                            activeTab === tab ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* contents / items here */}
            <div className="p-4">
                {activeTab === "All" && <div>All Messages</div>}
                {activeTab === "Unread" && <div>Unread Messages</div>}
                {activeTab === "Groups" && <div>Group Messages</div>}
                {activeTab === "Communities" && <div>Community Messages</div>}
            </div>
        </div>
    );
};

export default MessengerModal;
