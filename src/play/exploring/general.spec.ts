import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { exploreN } from '#modules/explore';

const n = 10;
const interval = 500;
test('exploring:general', async ({page}) => {
  while (true) {
    await goto(page, 'https://farmrpg.com/#!/area.php?id=7');
    await exploreN(page, 'Forest', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=3');
    await exploreN(page, 'Highland Hills', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=4');
    await exploreN(page, 'Cane Pole Ridge', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=5');
    await exploreN(page, 'Misty Forest', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=6');
    await exploreN(page, 'Black Rock Canyon', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=8');
    await exploreN(page, 'Mount Banon', n, interval);

    await goto(page, 'https://farmrpg.com/#!/area.php?id=9');
    await exploreN(page, 'Ember Lagoon', n, interval);
  }
});
