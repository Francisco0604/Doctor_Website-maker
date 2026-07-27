import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/samples/familycare-clinic",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
