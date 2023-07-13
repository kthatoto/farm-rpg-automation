import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:farm-pond', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=2');
  await fish(page);
});
