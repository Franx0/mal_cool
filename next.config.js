/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
      domains: ["drive.google.com"],
      formats: ["image/webp"],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
