import type { NextConfig } from "next";

const repo = "website";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    devIndicators: false,
    output: "export",
    basePath: isProd ? `/${repo}` : "",
    assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
