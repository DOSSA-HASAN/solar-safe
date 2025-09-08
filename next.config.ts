import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // 👈 whitelist this hostname
  },
};

export default nextConfig;
