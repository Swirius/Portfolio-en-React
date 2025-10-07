/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // If deploying to username.github.io, remove or comment out the basePath
  // If deploying to username.github.io/repository-name, uncomment and set your repo name:
  // basePath: '/portfolio',
}

export default nextConfig
