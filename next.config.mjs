/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a sub-path on GitHub Pages, uncomment and set:
  // basePath: '/your-repo-name',
};

export default nextConfig;
