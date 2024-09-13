const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Added for accessibility
    '@storybook/addon-themes', // Added for theme switching
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fsCache: true,
      lazyCompilation: true,
      builder: {
        useSWC: true, // SWC is still relevant for the latest Storybook
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "webpack5", // Storybook now defaults to Webpack 5, so ensure it's specified
  },
  async webpackFinal(config) {
    // Exclude SVGs from file-loader
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add SVGR loader for handling SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
      issuer: /\.[jt]sx?$/,
    });

    return config;
  },
};

export default config;
