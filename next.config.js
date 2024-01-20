/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'demo.themesberg.com',
            port: '',
            pathname: '/windster/images/users/**',
          },
        ],
      },
}

module.exports = nextConfig
