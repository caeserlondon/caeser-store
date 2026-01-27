


const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
	framework: {
		name: process.env.NEXT_PUBLIC_FRAMEWORK,
	},
	i18n: {
		locales: ['en-GB', 'es'],
		defaultLocale: 'en-GB',
	},
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2));



// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   i18n: {
//     locales: ['en-GB', 'es'],
//     defaultLocale: 'en-GB',
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.shopify.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
