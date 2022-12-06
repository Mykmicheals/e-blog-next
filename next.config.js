/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    domains: ['userauth.pythonanywhere.com', 'media.guim.co.uk'],
  },
}

module.exports = nextConfig
