import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:emerald-beach', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=7');
  await fish(page, 'Emerald Beach');
});
