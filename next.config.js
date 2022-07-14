/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "https://foued80.github.io/space_tourism_website" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
