import CommonGenericIcon from "../icon-components/generic-icons";
import React from "react";

const PostActionButton = () => {
    return (
        <div
            className="bg-white rounded-[8px] flex items-center justify-center cursor-pointer label-text px-3 hover:bg-[#E4E6EB]"
            style={{ width: "clamp(160px, 16.875vw, 216px)" }}
        >
            <div className="px-1 py-[6px]">
                <CommonGenericIcon
                    imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/y6/r/olX2yf1iinG.png"
                    backgroundPosition="0px -798px"
                    height="20px"
                    width="20px"
                />
            </div>

            <span className="px-1 py-[6px]">Like</span>
        </div>
    );
};

export default PostActionButton;
