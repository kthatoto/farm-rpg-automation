import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { buyMax } from '#modules/buyMax';
import { setTimeout } from "timers/promises";
import { getTime } from '#utils/timestamp';

test('shopping', async ({ page }) => {
  while (true) {
    console.log('~~~~~Shopping~~~~~')
    await goto(page, 'https://farmrpg.com/index.php#!/store.php');
    await buyMax(page, 'Potato Seeds');
    await buyMax(page, 'Worms');
    console.log(getTime());

    await setTimeout(5 * 1000);
  }
});
