/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  eslint: {
    // Don't fail the production build on lint warnings (e.g. <img> usage).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
