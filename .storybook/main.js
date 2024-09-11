const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fsCache: true,
      lazyCompilation: true,
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config) {
    // SVG handling
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      issuer: {
        and: [/\.(js|ts)x?$/]
      }
    });

    // Existing configurations
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Node.js core modules fallback
    config.resolve.fallback = {
      ...config.resolve.fallback,
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
    };

    // Aliases
    config.resolve.alias['@'] = path.resolve(__dirname, '../components');
    config.resolve.alias['next/router'] = require.resolve('next/router');
    config.resolve.alias['next/dist/shared/lib/utils'] = require.resolve('next/dist/shared/lib/utils');
    config.resolve.alias['next/dist/compiled/react-is'] = require.resolve('next/dist/compiled/react-is');

    return config;
  },
};

export default config;
