import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { buyMax } from '#modules/buyMax';
import { setTimeout } from "timers/promises";

test('shopping', async ({ page }) => {
  await goto(page, 'https://farmrpg.com/index.php#!/store.php');

  await buyMax(page, 'Potato Seeds');
  await buyMax(page, 'Worms');

  await setTimeout(2000);
});
