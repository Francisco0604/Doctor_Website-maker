import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/samples/activemotion-physio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
