/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // @ts-ignore
        hostname: process.env.NEXT_IMAGE_DOMAIN,
      },
    ],
  },
};

module.exports = nextConfig;
