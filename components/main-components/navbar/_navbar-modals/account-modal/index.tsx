import React from "react";

interface AccountModalProps {
    isAccountOpen: boolean;
}
const AccountModal = ({ isAccountOpen }: AccountModalProps) => {
    if (!isAccountOpen) return null;

    return <div>AccounModal</div>;
};

export default AccountModal;
