/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;




