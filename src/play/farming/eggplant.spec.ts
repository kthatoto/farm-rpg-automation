import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { farmingAll } from '#modules/farming';

test('farming:eggplant', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/xfarm.php?id=286431');
  await farmingAll(page, 'Eggplant');
});
