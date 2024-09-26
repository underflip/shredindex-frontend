const { defineConfig } = require('cypress');
const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Existing setup
      const existingSetup = require('./cypress/plugins/index.js')(on, config);

      // Code coverage task
      codeCoverageTask(on, config);

      // Merge configurations
      return { ...existingSetup, ...config };
    },
    baseUrl: 'http://localhost:6006',
    testIsolation: false,
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
