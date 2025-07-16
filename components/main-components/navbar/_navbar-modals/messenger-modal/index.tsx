import React from "react";
import ModalHeader from "@/components/sub-components/modal-header";
import { MessengerModalProps } from "@/app/types";
import CommonGenericIcon from "@/public/generic-icons/common-generic-icon";
import { genericIconLinks } from "@/app/constants/dummy-data";
import SearchBar from "@/components/sub-components/search-bar";
const MessengerModal = ({ isMessengerOpen }: MessengerModalProps) => {
    if (!isMessengerOpen) return null;

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
            <div></div>

            {/* contents / items here */}
            <div></div>
        </div>
    );
};

export default MessengerModal;
