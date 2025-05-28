import MenuItem from "@/components/sub-components/menu-item";
import React from "react";
import useViewModel from "./useViewModel";

interface MenuModalProps {
    isMenuOpen: boolean;
}

const MenuModal = ({ isMenuOpen }: MenuModalProps) => {
    const menuProfessionalItems = useViewModel();

    if (!isMenuOpen) return null;

    return (
        <div className="fixed top-[52px] right-4 w-[700px] h-[calc(100vh-70px)] bg-[var(--card-background-100)] rounded-lg shadow-xl z-90 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 shadow-sm z-10">
                <span className="text-xl font-semibold">Menu</span>
            </div>

            <div className="flex-1 overflow-y-auto flex">
                <div className="w-2/3 p-4 pr-6">
                    <input type="text" placeholder="Search menu" className="w-full mb-4 px-4 py-2 rounded-full bg-gray-100 text-sm outline-none" />

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
                        <ul className="space-y-2 text-sm">
                            <li>
                                <strong>Events</strong> — Organize or find events and activities nearby.
                            </li>
                            <li>
                                <strong>Friends</strong> — Search for people you may know.
                            </li>
                            <li>
                                <strong>Groups</strong> — Connect with others who share your interests.
                            </li>
                            <li>
                                <strong>News Feed</strong> — See posts from friends and Pages.
                            </li>
                            <li>
                                <strong>Feeds</strong> — Recent posts from groups and more.
                            </li>
                            <li>
                                <strong>Pages</strong> — Connect with businesses on Facebook.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Professional</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <strong>Ads Manager</strong> — Create, manage and track the performance of your ads.
                            </li>
                            <li className="bg-gray-100 rounded-lg p-2">
                                <strong>Meta Business Suite</strong>
                                <br />A better way to manage your business across Facebook and Instagram.
                            </li>
                            <li>
                                <strong>Professional Dashboard</strong> — Get insights, create ads, and explore tools.
                            </li>
                            <li>
                                <strong>Ad Center</strong> — Manage all the ads you create in Pages.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Social</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <strong>Events</strong> — Organize or find events and activities nearby.
                            </li>
                            <li>
                                <strong>Friends</strong> — Search for people you may know.
                            </li>
                            <li>
                                <strong>Groups</strong> — Connect with others who share your interests.
                            </li>
                            <li>
                                <strong>News Feed</strong> — See posts from friends and Pages.
                            </li>
                            <li>
                                <strong>Feeds</strong> — Recent posts from groups and more.
                            </li>
                            <li>
                                <strong>Pages</strong> — Connect with businesses on Facebook.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Professional</h3>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-600 mb-2">Social</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <strong>Events</strong> — Organize or find events and activities nearby.
                            </li>
                            <li>
                                <strong>Friends</strong> — Search for people you may know.
                            </li>
                            <li>
                                <strong>Groups</strong> — Connect with others who share your interests.
                            </li>
                            <li>
                                <strong>News Feed</strong> — See posts from friends and Pages.
                            </li>
                            <li>
                                <strong>Feeds</strong> — Recent posts from groups and more.
                            </li>
                            <li>
                                <strong>Pages</strong> — Connect with businesses on Facebook.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Create Section */}
                <div className="w-1/3 bg-gray-50 p-4 border-l border-gray-200">
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
