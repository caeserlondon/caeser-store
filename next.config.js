


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-GB', 'es'],
    defaultLocale: 'en-GB',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;