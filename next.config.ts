import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spark-safe-c",
  images: { unoptimized: true },
};

export default nextConfig;
