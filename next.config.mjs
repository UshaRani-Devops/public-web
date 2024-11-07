/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
