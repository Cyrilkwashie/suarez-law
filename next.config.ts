import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.jaime-suarez.com",
      },
      {
        protocol: "https",
        hostname: "imageserver.floridabar.org",
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
