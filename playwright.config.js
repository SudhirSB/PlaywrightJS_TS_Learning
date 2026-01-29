// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = ({
  testDir: './tests',
  // Setting timeout for each tests to be 40 seconds
  timeout: 40*1000,
  expect:{
    // timeout being set for the expect conditions
    timeout: 5*1000
  },
  reporter: 'html',
  use: {
    browserName:'chromium',
    headless: true
  }
});
module.exports = config;