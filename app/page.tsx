import SideBarItem from "@/components/sidebar-item";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-full">
            <SideBarItem altText="test alt" imageSrc="/icons/facebook-icon.png" imageWidth={36} imageHeight={36} label="Lerd Robott" />
        </div>
    );
}
