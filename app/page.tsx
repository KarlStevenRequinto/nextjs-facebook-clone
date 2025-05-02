import MediaActionButton from "@/components/sub-components/media-action-button";
import PostActionButton from "@/components/sub-components/post-action-button";
import SideBarItem from "@/components/sub-components/sidebar-item";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-full gap-4 flex-col">
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
            <MediaActionButton altText="test alt" imageSrc="/icons/live-video-icon.png" imageWidth={24} imageHeight={24} label="Live video" />
            <PostActionButton />
        </div>
    );
}
