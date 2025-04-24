import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/main-layout";

export default function Home() {
    return (
        <MainLayout
            leftSidebar={<div className="p-4 ">LEFT: Friends, Groups, Shortcuts</div>}
            rightSidebar={<div className="p-4">RIGHT: Birthdays, Contacts, Sponsored</div>}
        >
            <div className="p-4">
                <h1>Main Feed</h1>
                <p>Dynamic posts go here...</p>
            </div>
        </MainLayout>
    );
}
