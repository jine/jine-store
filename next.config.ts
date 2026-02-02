import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    /*images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
        ],*/
    images: {
        remotePatterns: [new URL('https://cdn.dummyjson.com/**')],
    },
};

export default nextConfig;
