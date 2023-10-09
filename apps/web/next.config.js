/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@turbocell/api","@turbocell/ui", "@turbocell/utils","@turbocell/db", "@turbocell/shadcn", "@turbocell/auth"],
};

module.exports = nextConfig;
