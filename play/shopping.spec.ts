import { test } from '@playwright/test';
import { login } from '#modules/login';
import { goto } from '#modules/goto';
import { buyMax } from '#modules/buyMax';
import { setTimeout } from "timers/promises";

import { chromium } from '@playwright/test';

const userDataDir = '/Users/kthatoto/Library/Application Support/Google/Chrome/Default';

test('debug', async () => {
  const browser = await chromium.launchPersistentContext(userDataDir);
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.pause();
});

// test('shopping', async ({ page }) => {
//   await login(page);
//
//   await goto(page, 'https://farmrpg.com/index.php#!/store.php');
//
//   buyMax(page, 'Potato Seeds');
//   buyMax(page, 'Worms');
//
//   await setTimeout(2000);
// });
