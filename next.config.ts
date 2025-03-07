import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports for GitHub Pages
  reactStrictMode: true,
  basePath: "/tspa",
};

module.exports = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
