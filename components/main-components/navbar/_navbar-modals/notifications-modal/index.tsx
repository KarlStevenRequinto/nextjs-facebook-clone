import React from "react";

interface NotificationModalProps {
    isNotificationOpen: boolean;
}
const NotificationModal = ({ isNotificationOpen }: NotificationModalProps) => {
    if (!isNotificationOpen) return null;

    return <div>NotificationModal</div>;
};

export default NotificationModal;
