import React from "react";

interface MessengerModalProps {
    isMessengerOpen: boolean;
}

const MessengerModal = ({ isMessengerOpen }: MessengerModalProps) => {
    if (!isMessengerOpen) return null;

    return <div>MessengerModal</div>;
};

export default MessengerModal;
