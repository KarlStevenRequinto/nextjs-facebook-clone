import React from "react";

interface MenuModalProps {
    isMenuOpen: boolean;
}

const MenuModal = ({ isMenuOpen }: MenuModalProps) => {
    if (!isMenuOpen) return null;

    return <div>MenuModal</div>;
};

export default MenuModal;
