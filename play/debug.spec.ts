import { test } from '@playwright/test';

test('debug', async ({ page }) => {
  await page.pause();
});
