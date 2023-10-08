/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@harborx/api","@harborx/ui", "@harborx/utils","@harborx/db", "@harborx/shadcn", "@harborx/auth"],
};

module.exports = nextConfig;
