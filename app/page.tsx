import MediaActionButton from "@/components/sub-components/media-action-button";
import MenuItem from "@/components/sub-components/menu-item";
import PostActionButton from "@/components/sub-components/post-action-button";
import SearchItem from "@/components/sub-components/search-item";
import SideBarItem from "@/components/sub-components/sidebar-item";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-full gap-4 flex-col">
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            <MediaActionButton altText="test alt" imageSrc="/icons/live-video-icon.png" imageWidth={24} imageHeight={24} label="Live video" />
            <PostActionButton />
            <SearchItem />
            <MenuItem
                description="Create, manage and track the performance of your ads."
                title="Ads Manager"
                imgSource="/images/ads-manager.png"
                imgWidth={36}
                imgHeight={36}
            />
        </div>
    );
}
