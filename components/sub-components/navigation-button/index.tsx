import React from "react";

interface NavigationButtonProps {
    icon?: React.ReactNode;
    onClickBtn?: () => void;
    isActive?: boolean;
}

const NavigationButton = ({ icon, onClickBtn, isActive = false }: NavigationButtonProps) => {
    return (
        <div className="group relative w-[130px] h-[56px] flex items-center justify-center py-1 cursor-pointer" onClick={onClickBtn}>
            <div className={`w-full h-full flex items-center justify-center rounded-[8px] ${!isActive ? "group-hover:bg-[color:#f2f2f2]" : ""}`}>
                {icon}
            </div>
            <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[color:var(--primary-button-background)] rounded-t-[1px] transform transition-transform duration-300 ease-out ${
                    isActive ? "scale-y-100" : "scale-y-0"
                } origin-bottom`}
            />
        </div>
    );
};

export default NavigationButton;
