import { test } from '@playwright/test';
import { login } from '#modules/login';
import { goto } from '#modules/goto';
import { buyMax } from '#modules/buyMax';
import { setTimeout } from "timers/promises";

test('shopping', async ({ page }) => {
  await login(page);

  await goto(page, 'https://farmrpg.com/index.php#!/store.php');

  buyMax(page, 'Potato Seeds');
  // buyMax(page, 'Worms');

  await setTimeout(2000);
});
