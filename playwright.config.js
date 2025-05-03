// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 30*1000,
  expect:{
  timeout: 10000
  },
  
  reporter: 'html',
  use: {

    browserName : 'chromium',
    headless: false,
    screenshot:'on',
    trace:'retain-on-failure'//off,on,retain-on-failure
  },
  

  /* Configure projects for major browsers */
 


};


module.exports = config

