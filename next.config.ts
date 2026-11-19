import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // AVIF is noticeably smaller than WebP for the screenshot-heavy case
    // studies; browsers without AVIF support fall back to WebP.
    formats: ["image/avif", "image/webp"],
    // Proof images rarely change, so keep optimized copies cached for 31 days.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
