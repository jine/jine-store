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
        remotePatterns: [new URL("https://cdn.dummyjson.com/**")],
        //    remotePatterns: [new URL('https://cdn.dummyjson.com/**')], <--- Fungerar lika bra som ""
        //    remotePatterns: [new URL("https://cdn.dummyjson.com/*")], <-- Denna fungerar INTE (en wildcard = *)
    },
};

export default nextConfig;
