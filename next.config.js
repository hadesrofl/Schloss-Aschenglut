const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/Schloss-Aschenglut" : "";

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};

module.exports = withNextra(nextConfig);
