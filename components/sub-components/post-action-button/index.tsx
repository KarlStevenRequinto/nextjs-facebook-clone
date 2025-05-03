import LikeIcon from "@/public/generic-icons/like-icon";
import React from "react";

const PostActionButton = () => {
    return (
        <div
            className="bg-white rounded-[8px] flex items-center justify-center cursor-pointer label-text px-3 hover:bg-[#E4E6EB]"
            style={{ width: "clamp(160px, 16.875vw, 216px)" }}
        >
            <div className="px-1 py-[6px]">
                <LikeIcon />
            </div>

            <span className="px-1 py-[6px]">Like</span>
        </div>
    );
};

export default PostActionButton;
