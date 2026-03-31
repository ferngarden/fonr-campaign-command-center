/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fonr-campaign-command-center' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fonr-campaign-command-center/' : '',
}
export default nextConfig
