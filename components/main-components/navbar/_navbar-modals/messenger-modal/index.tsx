import React from "react";
import ModalHeader from "@/components/sub-components/modal-header";
import { MessengerModalProps } from "@/app/types";
import CommonGenericIcon from "@/public/generic-icons/common-generic-icon";

const MessengerModal = ({ isMessengerOpen }: MessengerModalProps) => {
    if (!isMessengerOpen) return null;

    return (
        <div
            className="fixed top-[52px] right-4 w-[360px] h-[calc(100vh-70px)] bg-white rounded-lg shadow-xl z-90 overflow-hidden flex flex-col "
            style={{ boxShadow: "0 -4px 1.5px -4px rgba(0, 0, 0, 0.2)" }}
        >
            <div className="flex items-center justify-between ">
                <ModalHeader text="Chats" />
                <div className="flex items-center">
                    <div>
                        <CommonGenericIcon
                            imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/yE/r/AUEjpVUew_a.png"
                            backgroundPosition="0px -427px"
                            width="20px"
                            height="20px                                                                                  .././/"
                        />
                    </div>
                    <div>square</div>
                    <div>new</div>
                </div>
            </div>
        </div>
    );
};

export default MessengerModal;
