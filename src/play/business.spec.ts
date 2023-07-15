import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { setTimeout } from "timers/promises";
import { getTime } from '#utils/timestamp';
import { nTimes } from '#utils/nTimes';

import { buyMax } from '#modules/buyMax';
import { farmingAllN } from '#modules/farming';
import { sacrificeN } from '#modules/temple';
import { craftAll } from '#modules/workshop';

test('business', async ({ page }) => {
  while (true) {
    await nTimes(async () => {
      await goto(page, 'https://farmrpg.com/index.php#!/store.php');
      console.log('~~~~~Shopping~~~~~')
      await buyMax(page, 'Potato Seeds');
      await buyMax(page, 'Eggplant Seeds');
      await buyMax(page, 'Worms');
      console.log(getTime());
      await setTimeout(6 * 1000);
    }, 10);

    console.log('~~~~~Farming~~~~~')
    await goto(page, 'https://farmrpg.com/#!/xfarm.php?id=286431');
    await farmingAllN(page, 'Potato', 1, 1000);

    console.log('~~~~~Temple~~~~~')
    await sacrificeN(page, 'https://farmrpg.com/#!/templeitem.php?id=565', 1, 1000); // Hot Potato
    await sacrificeN(page, 'https://farmrpg.com/#!/templeitem.php?id=48', 1, 1000); // Potato

    console.log('~~~~~Workshop~~~~~');
    await goto(page, 'https://farmrpg.com/#!/workshop.php');

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
  }
});
