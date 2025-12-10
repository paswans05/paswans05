/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Custom webpack configurations can go here
    return config;
  },
};

export default nextConfig;
