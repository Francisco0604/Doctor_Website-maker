import type { NextConfig } from "next";

const isVercel = process.env.VERCEL || false;
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

const basePath = isVercel ? "" : (repo ? `/${repo}` : "");

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export", trailingSlash: true }),
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
