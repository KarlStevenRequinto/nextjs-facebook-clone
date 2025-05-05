import React from "react";

interface NavigationButtonProps {
    icon?: React.ReactNode;
    onClickBtn?: () => void;
}

const NavigationButton = ({ icon, onClickBtn }: NavigationButtonProps) => {
    return (
        <div className="group relative w-[130px] h-[56px] flex items-center justify-center p-1 cursor-pointer" onClick={onClickBtn}>
            <div className="w-full h-full flex items-center justify-center rounded-[8px] group-hover:bg-[color:#f2f2f2]">{icon}</div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--primary-button-background)] rounded-t-[1px]" />
        </div>
    );
};

export default NavigationButton;
