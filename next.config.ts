// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**', // Allow all paths for this domain
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

