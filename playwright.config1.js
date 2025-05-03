// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  retries: 1,
  workers:3,
  timeout: 30*1000,
  expect:{
  timeout: 10000
  },
  projects: [
    {
      name : 'SafariExecution',
      use: {
        browserName : 'webkit',
        headless: false,
        screenshot:'only-on-failure',
        trace:'on',//off,on,retain-on-failure
        ...devices['BlackBerry Z30 landscape']
      }

    },
    {
      name : 'ChromeExecution',
      use: {
        browserName : 'chromium',
        headless: false,
        screenshot:'on',
        video :'retain-on-failure',
        ignorehttpserrors: true,
        permisssions: ['geolocation'],
        trace:'retain-on-failure',//off,on,retain-on-failure
        viewport: { width: 640, height: 360 }
      }

    }
  ],
  
  reporter: 'html',
  
  

  /* Configure projects for major browsers */
 


};


module.exports = config

