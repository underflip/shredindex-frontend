const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules')],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.resolve.alias['@coreui/coreui'] = path.join(__dirname, 'node_modules', '@coreui/coreui');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  transpilePackages: ['mapbox-gl'],
  images: {
    disableStaticImages: false,  // Changed this to false
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
