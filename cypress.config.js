const { defineConfig } = require("Cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports", // Report output directory
    overwrite: true, // Prevent overwriting previous reports
    html: true, // Generate HTML reports
  },
});

