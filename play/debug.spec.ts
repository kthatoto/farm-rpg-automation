import { test } from '@playwright/test';
import { login } from '#modules/login';

test('debug', async ({ page }) => {
  await login(page);

  await page.pause();
});
