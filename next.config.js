/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Força uso do Babel ao invés do SWC
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig



