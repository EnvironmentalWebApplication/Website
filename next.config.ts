/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // required for static export
    basePath: '/Website', // this MUST match your GitHub repo name
    assetPrefix: '/Website/', // also must match
    reactStrictMode: true,
};

module.exports = nextConfig;
