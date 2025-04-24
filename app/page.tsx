import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="text-blue-500">I'm HEADER!</h1>
            <Image src="/icons/facebook-icon.png" width={500} height={500} alt="facebook-icon" />
            <Link href={`/gaming`}>Gaming Page Link</Link>
        </div>
    );
}
