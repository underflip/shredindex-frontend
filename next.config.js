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
  // TODO: remove eventually.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.alias['@coreui/coreui'] = path.join(__dirname, 'node_modules', '@coreui/coreui');
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        ],
    });
    return config;
  },
  images: {
    disableStaticImages: false,  // Changed this to false
    remotePatterns: ['localhost', 'source.unsplash.com'],
  },
};

module.exports = nextConfig;
