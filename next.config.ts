import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a fully static site for `next build` (Next.js 16+)
  output: "export",
  // GitHub Pages project site lives at https://<user>.github.io/<repo>
  // set basePath and assetPrefix so built assets and routes include the repo name
  basePath: "/anomaly_detection",
  assetPrefix: "/anomaly_detection",
  // ensure exported pages end with trailing slash so GitHub Pages serves index.html files
  trailingSlash: true,
};

export default nextConfig;
