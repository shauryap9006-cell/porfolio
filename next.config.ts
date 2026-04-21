import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/porfolio',
  assetPrefix: '/porfolio',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  }
};

export default nextConfig;