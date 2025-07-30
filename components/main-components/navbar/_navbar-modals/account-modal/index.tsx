import React from "react";

interface AccountModalProps {
    isAccountOpen: boolean;
}
const AccountModal = ({ isAccountOpen }: AccountModalProps) => {
    if (!isAccountOpen) return null;

    return <div className="w-[360px] bg-white common-shadow-styling-container">AccounModal</div>;
};

export default AccountModal;
