import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports for GitHub Pages
  reactStrictMode: true,
  basePath: "/tspa",
  assetPrefix: "/tspa",
};

export default nextConfig;
