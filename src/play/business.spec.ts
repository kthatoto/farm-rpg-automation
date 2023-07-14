import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { setTimeout } from "timers/promises";
import { getTime } from '#utils/timestamp';
import { nTimes } from '#utils/nTimes';

import { buyMax } from '#modules/buyMax';
import { farmingAllN } from '#modules/farming';
import { sacrificeN } from '#modules/temple';

test('business', async ({ page }) => {
  while (true) {
    await nTimes(async () => {
      await goto(page, 'https://farmrpg.com/index.php#!/store.php');
      console.log('~~~~~Shopping~~~~~')
      await buyMax(page, 'Potato Seeds');
      await buyMax(page, 'Eggplant Seeds');
      await buyMax(page, 'Worms');
      console.log(getTime());
      await setTimeout(5 * 1000);
    }, 10);

    await goto(page, 'https://farmrpg.com/#!/xfarm.php?id=286431');
    await farmingAllN(page, 'Potato', 1, 1000);

    await sacrificeN(page, 'https://farmrpg.com/#!/templeitem.php?id=565', 1, 1000); // Hot Potato
    await sacrificeN(page, 'https://farmrpg.com/#!/templeitem.php?id=48', 1, 1000); // Potato
  }
});
