import React from "react";

const Navbar = () => {
    return (
        <nav className="h-[56px] bg-white sticky top-0 z-50 flex items-center justify-between px-4 shadow">
            {/* Left - Icon + Searchbar */}
            <div className="flex items-center gap-2">
                <div>icon</div>
                <div>searchbar</div>
            </div>

            {/* Center - Nav Buttons */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4">nav buttons</div>

            {/* Right - Menus + Profile */}
            <div className="flex items-center gap-2">
                <div>menus</div>
                <div>profile pic</div>
            </div>
        </nav>
    );
};

export default Navbar;
