/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["harley-space.syd1.digitaloceanspaces.com"],
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