import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { farmingAll } from '#modules/farming';

test('farming:potato', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/xfarm.php?id=286431');
  await farmingAll(page, 'Potato');
});
