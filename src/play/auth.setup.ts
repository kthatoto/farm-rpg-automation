import { test as setup, type Page } from '@playwright/test';

import { login } from '#modules/login';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await login(page);
  await page.context().storageState({ path: authFile });
});
