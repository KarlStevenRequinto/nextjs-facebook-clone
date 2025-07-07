import MenuItem from "@/components/sub-components/menu-item";
import React from "react";
import {
    menuCommunityResourcesItems,
    menuCreateItems,
    menuEntertainmentItems,
    menuMoreFromMetaItems,
    menuPersonalItems,
    menuProfessionalItems,
    menuShoppingItems,
    menuSocialItems,
} from "@/app/constants/dummy-data";
import SearchMenuIcon from "@/public/generic-icons/search-menu-icon";
import Divider from "@/components/sub-components/divider";
import CommonGenericIcon from "@/public/generic-icons/common-generic-icon";
interface MenuModalProps {
    isMenuOpen: boolean;
}

interface menuHeaderProps {
    title: string;
}
const MenuHeader = ({ title }: menuHeaderProps) => {
    return <h3 className="text-[17px] font-medium px-2 mb-2">{title}</h3>;
};

const MenuModal = ({ isMenuOpen }: MenuModalProps) => {
    if (!isMenuOpen) return null;

    return (
        <div className="fixed top-[52px] right-4 w-[608px] h-[calc(100vh-70px)] bg-[var(--card-background-100)] rounded-lg shadow-xl z-90 overflow-hidden flex flex-col">
            <div className="py-3.5">
                <span className="inline-block align-top font-bold text-[24px] leading-[20px] px-4">Menu</span>
            </div>

            <div className="overflow-y-auto flex pl-4 gap-4 custom-scrollbar pb-3">
                {/* Left: Scroll Section */}

                <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-lg w-[360px] px-2 pt-4 flex-shrink-0 min-h-max border border-gray-200">
                    <div className="flex xl:flex items-center bg-[color:var(--comment-background)] rounded-full h-[36px] mx-2 mb-4">
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

                    <div className="mb-5">
                        <MenuHeader title="Professional" />
                        {menuProfessionalItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSource={item.imgSource}
                                imgHeight={item.imgHeight}
                                imgWidth={item.imgWidth}
                                imgStyle={{ marginRight: "6px" }}
                            />
                        ))}
                    </div>
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="Social" />
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
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="Entertainment" />
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
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="Shopping" />
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
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="Personal" />
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
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="Community Resources" />
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
                    <Divider />
                    <div className="mb-5 mt-3">
                        <MenuHeader title="More from Meta" />
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
                <div className="bg-white rounded-lg w-[200px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-gray-200">
                    <span className="inline-block align-top font-bold text-[20px] leading-[20px] p-3">Create</span>
                    <ul className="text-sm">
                        {menuCreateItems.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2 px-2">
                                <div className="p-2 flex items-center space-x-2 cursor-pointer w-full rounded-lg hover:bg-[color:var(--backgorund-300)] transition-colors">
                                    <div className="rounded-full bg-[var(--secondary-background)] flex items-center justify-center w-9 h-9">
                                        <CommonGenericIcon
                                            height="20px"
                                            width="20px"
                                            imageUrl={item.imageUrl}
                                            backgroundPosition={item.backgroundPosition}
                                        />
                                    </div>

                                    <span>{item.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;
