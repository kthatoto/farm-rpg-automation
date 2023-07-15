import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { craftAll } from '#modules/workshop';
import { setTimeout } from "timers/promises";

test('workshop', async ({ page }) => {
  while (true) {
    await goto(page, 'https://farmrpg.com/#!/workshop.php');
    console.log('~~~~~Workshop~~~~~');

    await craftAll(page, 'Unpolished Shimmer Stone');
    await craftAll(page, 'Shimmer Stone');
    await craftAll(page, 'Glass Orb');
    await craftAll(page, 'Glass Bottle');

    await craftAll(page, 'Iron Ring');
    await craftAll(page, 'Salt');

    await craftAll(page, 'Leather');
    await craftAll(page, 'Sand');

    await craftAll(page, 'Lantern');
    await craftAll(page, 'Hourglass');
    await craftAll(page, 'Fancy Pipe');

    await setTimeout(5 * 60 * 1000);
  }
});
