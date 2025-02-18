/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pophariini.com",
      },
      {
        protocol: "https",
        hostname: "dapurletter.id",
      },
      {
        protocol: "https",
        hostname: "www.nme.com",
      },
      {
        protocol: "https",
        hostname: "cdn.antaranews.com",
      },
      {
        protocol: "https",
        hostname: "cdn.grid.id",
      },
      {
        protocol: "https",
        hostname: "manual.co.id",
      },
      {
        protocol: "https",
        hostname: "bolehmusic.com",
      },
      {
        protocol: "https",
        hostname: "awsimages.detik.net.id",
      },
      {
        protocol: "https",
        hostname: "soundcorners.com",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "cdn-images.dzcdn.net",
      },
      {
        protocol: "https",
        hostname: "images.genius.com",
      },
    ],
  },
};

export default nextConfig;
