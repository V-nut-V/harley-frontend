/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "harley-space.syd1.digitaloceanspaces.com",
        port: "",
        pathname: "/harley/**",
      },
    ],
  },
};

module.exports = nextConfig