import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './play',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      // dependencies: ['setup'],
    },
  ],
});
