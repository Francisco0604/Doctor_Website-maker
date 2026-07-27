import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}
const repoPrefix = repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `${repoPrefix}/samples/activemotion-physio`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
