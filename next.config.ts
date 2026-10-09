import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  // Worker threads keep the build compatible with restricted Windows environments.
  experimental: { workerThreads: true, useTypeScriptCli: false, cpus: 2 },
};
export default nextConfig;
