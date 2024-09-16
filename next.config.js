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
  webpack(config, { isServer }) {
    config.resolve.alias['@coreui/coreui'] = path.join(__dirname, 'node_modules', '@coreui/coreui');

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
  images: {
    disableStaticImages: false,  // Next.js Image component updates
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ftjcfx.com',
        pathname: '/*',
      },
    ],
  },
  experimental: {
    appDir: true,  // Optional: Next.js 14 app directory structure
    typedRoutes: true,  // New experimental feature in Next.js 14 for typed routes in TypeScript
  },
};

module.exports = nextConfig;
