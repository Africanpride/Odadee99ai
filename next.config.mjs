/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add imajge source
  images: {
    // domains: [
    //   "images.unsplash.com",
    //   "images.pexels.com",
    //   "upload.wikimedia.org",
    //   "encrypted-tbn0.gstatic.com",
    // ],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.unsplash.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
        },
        {
          protocol: 'https',
          hostname: '**.unsplash.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
        },
      ],
  },
};

export default nextConfig;
