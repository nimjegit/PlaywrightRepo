// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on, worker } from 'node:cluster';

const config = ({
  testDir: './tests',
  retries: 1,
  /* Run tests in files in parallel */
  fullyParallel: false,
  worker: 3,
  timeout: 50*1000,
  reporter: [['html'], ['allure-playwright']],
    
    /* Configure projects for major browsers */
    projects: [
      {
        name: 'chromium',
        use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on', /*screenshot options: 'on''off''retain-on-failure''on-first-retry'*/
        video:'on',
        trace: 'on' /* trace options: 'on-first-retry','on-all-retries', 'off','on','retain-on-failure' */
            }
      },
  
      {
        name: 'firefox',
        use: {
        browserName: 'firefox',
        headless: false,
        screenshot: 'only-on-failure', /*screenshot options: 'on''off''retain-on-failure''on-first-retry'*/
        trace: 'on' /* trace options: 'on-first-retry','on-all-retries', 'off','on','retain-on-failure' */
            }
      },
  
      {
        name: 'webkit',
        use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'only-on-failure', /*screenshot options: 'on''off''retain-on-failure''on-first-retry'*/
        trace: 'on',/* trace options: 'on-first-retry','on-all-retries', 'off','on','retain-on-failure' */
        //...devices['iPhone 12']  //will open browser in mobile
          }
      }
  
      /* Test against mobile viewports. */
      // {
      //   name: 'Mobile Chrome',
      //   use: { ...devices['Pixel 5'] },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: { ...devices['iPhone 12'] },
      // },
  
      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      // },
       ],
});

module.exports = config;