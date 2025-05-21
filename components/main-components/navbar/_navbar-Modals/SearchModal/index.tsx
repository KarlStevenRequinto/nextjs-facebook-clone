import React from "react";
import ArrowLeftIcon from "@/public/svg/arrow-left-icon";
import SearchIcon from "@/public/svg/search-icon";
import SearchItem from "@/components/sub-components/search-item";
interface SearchModalProps {
    isSearchOpen: boolean;
    isSearchBarExpanded: boolean;
    isSearchFocused: boolean;
    searchValue: string;
    setSearchValue: (value: string) => void;
    setIsSearchOpen: (val: boolean) => void;
    setIsSearchFocused: (val: boolean) => void;
    modalRef: React.RefObject<HTMLDivElement | null>;
    modalInputRef: React.RefObject<HTMLInputElement | null>;
}

const SearchModal = ({
    isSearchOpen,
    isSearchBarExpanded,
    isSearchFocused,
    searchValue,
    setSearchValue,
    setIsSearchOpen,
    setIsSearchFocused,
    modalRef,
    modalInputRef,
}: SearchModalProps) => {
    if (!isSearchOpen) return null;

    return (
        <div
            className={` absolute left-0 top-0 w-[320px] h-[500px] bg-white rounded-lg shadow-xl px-2 py-2 z-100 transform transition-transform duration-500 ease-in-out overflow-hidden ${
                isSearchOpen ? "opacity-100 translate-y-0 pointer-events-auto scale-100" : "opacity-0 -translate-y-4 pointer-events-none scale-95"
            }`}
            ref={modalRef}
        >
            <div className="relative flex items-center pl-2 overflow-hidden">
                <div
                    className={`w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-[color:var(--comment-background)] cursor-pointer z-10 transition-transform duration-500 ease-in-out ${
                        isSearchBarExpanded ? "-translate-x-2" : "translate-x-0"
                    }`}
                >
                    <ArrowLeftIcon width="20" height="20" fillColor="var(--secondary-text)" />
                </div>

                {/* Animated Search Bar */}
                <div className="relative w-[252px] h-[40px]">
                    <div
                        className={`absolute right-0 top-0 bg-[color:var(--comment-background)] text-white rounded-full h-[40px] transition-[width] duration-100 ease-in-out hidden xl:flex items-center`}
                        style={{ width: isSearchBarExpanded ? "252px" : "240px" }}
                    >
                        <span
                            className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                                isSearchFocused ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
                            }`}
                        >
                            <SearchIcon fillColor="var(--secondary-text)" width="16" height="16" />
                        </span>

                        <input
                            type="text"
                            ref={modalInputRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search Facebook"
                            onFocus={() => {
                                setIsSearchOpen(true);
                                setIsSearchFocused(true);
                            }}
                            onBlur={() => {
                                setIsSearchFocused(false);
                            }}
                            className="bg-transparent outline-none border-none placeholder:text-[color:var(--secondary-text)] placeholder:text-md pt-[7px] pb-[9px] w-full h-full transition-[padding] duration-300"
                            style={{
                                color: "var(--primary-black)",
                                paddingLeft: isSearchFocused ? "16px" : "36px",
                                paddingRight: isSearchBarExpanded ? "16px" : "8px",
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between leading-[1.1765] mt-2 mb-[7px] px-2 pt-1.5">
                <h2 className="cursor-pointer text-[17px] font-semibold mb-1 relative top-[1.2px]">
                    <span>Recent</span>
                </h2>

                <span className="text-[color:var(--blue-100)] cursor-pointer">Edit</span>
            </div>

            <div>
                <SearchItem />
                <SearchItem />
            </div>
        </div>
    );
};

export default SearchModal;
