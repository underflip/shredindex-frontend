// babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      plugins: [],
    },
    e2e: {
      plugins: [
        'istanbul',
      ],
    },
  },
};
