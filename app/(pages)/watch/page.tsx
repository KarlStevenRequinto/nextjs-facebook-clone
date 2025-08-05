"use client";
import CommonGenericIcon from "@/components/sub-components/icon-components/generic-icons";
import RotatingArrowIcon from "@/components/sub-components/icon-components/rotating-arrow-icon";
import React, { useState } from "react";

const WatchPage = () => {
    const [angle, setAngle] = useState(0);

    const handleHover = () => {
        setAngle((prev) => prev + 180); // add 180° on each hover
    };

    return (
        <div>
            <CommonGenericIcon
                imageUrl="https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/SMANj1BDJfv.png"
                backgroundPosition="0px -370px"
                height="36px"
                width="36px"
            />

            <div className="group w-fit">
                <svg
                    viewBox="0 0 20 20"
                    width="32"
                    height="32"
                    fill="currentColor"
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                >
                    <g fillRule="evenodd" transform="translate(-446 -398)">
                        <g fillRule="nonzero">
                            <path
                                d="M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z"
                                transform="translate(352 204.5)"
                            ></path>
                            <path
                                d="M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z"
                                transform="translate(352 204.5)"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>

            <RotatingArrowIcon width="32" height="32" handleHover={handleHover} angle={angle} />
        </div>
    );
};

export default WatchPage;
