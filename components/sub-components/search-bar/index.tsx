import React from "react";
import CommonGenericIcon from "../icon-components/generic-icons";
import { SearchBarType } from "@/app/types";

const SearchBar = ({ placeholder }: SearchBarType) => {
    return (
        <div className="flex xl:flex items-center bg-[color:var(--comment-background)] rounded-full h-[36px] mx-2 mb-4">
            <span className="pl-3 h-full flex items-center justify-center">
                <CommonGenericIcon
                    imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/kt9pua4RajH.png"
                    backgroundPosition="0px -584px"
                    width="16px"
                    height="16px"
                    filter="invert(38%) sepia(8%) saturate(233%) hue-rotate(181deg) brightness(95%) contrast(90%)"
                />
            </span>
            <input
                type="text"
                placeholder={placeholder}
                className="h-full w-full rounded-full bg-[var(--comment-background)] outline-none placeholder:text-md placeholder:text-[color:var(--secondary-text)]"
                style={{
                    color: "var(--primary-black)",
                    padding: "7px 6px 9px",
                }}
            />
        </div>
    );
};

export default SearchBar;
