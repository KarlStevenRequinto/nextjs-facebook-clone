/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
    images: {
        domains: ["scontent.fceb2-1.fna.fbcdn.net"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.fna.fbcdn.net",
            },
            {
                protocol: "https",
                hostname: "**.fbcdn.net",
            },
        ],
    },
};

export default nextConfig;
