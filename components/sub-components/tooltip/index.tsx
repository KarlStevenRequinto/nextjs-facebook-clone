import React from "react";

const Tooltip = ({ text }: { text: string }) => {
    return (
        <div className="bg-[#000000cc] absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 py-2 px-3 text-white text-sm  rounded-xl shadow-md">
            {text}
        </div>
    );
};

export default Tooltip;
