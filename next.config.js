/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  basePath: "/Game-Finder",
  assetPrefix: "/Game-Finder/",
};
module.exports = nextConfig;
