import React from "react";

const Tooltip = ({ text }: { text: string }) => {
    return <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 px-2 py-1 text-white text-sm bg-blue-500 rounded">{text}</div>;
};

export default Tooltip;
