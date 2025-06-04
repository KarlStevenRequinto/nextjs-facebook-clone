import MenuItem from "@/components/sub-components/menu-item";
import React from "react";
import useViewModel from "./useViewModel";
import SearchIcon from "@/public/svg/search-icon";
import {
    menuCommunityResourcesItems,
    menuEntertainmentItems,
    menuMoreFromMetaItems,
    menuPersonalItems,
    menuProfessionalItems,
    menuShoppingItems,
    menuSocialItems,
} from "@/app/constants/dummy-data";
import SearchMenuIcon from "@/public/generic-icons/search-menu-icon";
interface MenuModalProps {
    isMenuOpen: boolean;
}

const MenuModal = ({ isMenuOpen }: MenuModalProps) => {
    if (!isMenuOpen) return null;

    return (
        <div className="fixed top-[52px] right-4 w-[608px] h-[calc(100vh-70px)] bg-[var(--card-background-100)] rounded-lg shadow-xl z-90 overflow-hidden flex flex-col">
            <div className="py-3.5">
                <span className="inline-block align-top font-bold text-[24px] leading-[20px] px-4">Menu</span>
            </div>

            <div className="overflow-y-auto flex pl-4 gap-4 custom-scrollbar h-[calc(100vh-150px)]">
                {/* Left: Scroll Section */}
                <div className="bg-white rounded-lg w-[360px] px-2 pt-4">
                    <div className="hidden xl:flex items-center bg-[color:var(--comment-background)] rounded-full h-[36px] mx-2">
                        <span className="pl-3 h-full flex items-center justify-center">
                            <SearchMenuIcon />
                        </span>
                        <input
                            type="text"
                            placeholder="Search menu"
                            className="h-full w-full rounded-full bg-[var(--comment-background)] outline-none placeholder:text-md placeholder:text-[color:var(--secondary-text)]"
                            style={{
                                color: "var(--primary-black)",
                                padding: "7px 6px 9px",
                            }}
                        />
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Professional</h3>
                        {menuProfessionalItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Social</h3>
                        {menuSocialItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Entertainment</h3>
                        {menuEntertainmentItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Shopping</h3>
                        {menuShoppingItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Personal</h3>
                        {menuPersonalItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Community Resources</h3>
                        {menuCommunityResourcesItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">More from Meta</h3>
                        {menuMoreFromMetaItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Create Section */}
                <div className="bg-yellow-700 rounded-lg w-[200px]">
                    <h3 className="text-sm font-bold text-gray-600 mb-2">Create</h3>
                    <ul className="space-y-3 text-sm">
                        <li>📝 Post</li>
                        <li>📸 Story</li>
                        <li>🎬 Reel</li>
                        <li>💍 Life event</li>
                        <hr className="my-2" />
                        <li>📄 Page</li>
                        <li>📢 Ad</li>
                        <li>👥 Group</li>
                        <li>📅 Event</li>
                        <li>🛒 Marketplace listing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;
