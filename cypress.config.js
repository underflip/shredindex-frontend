const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@cypress/code-coverage/task')(on, config)
      return config;
    },
    baseUrl: 'http://localhost:6006',
    testIsolation: false,
  },
  env: {
    NEXT_PUBLIC_MAPBOX_API_KEY: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    NEXT_PUBLIC_MAPBOX_STYLE: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
