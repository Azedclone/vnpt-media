/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.cdn.culinarywonderland.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
