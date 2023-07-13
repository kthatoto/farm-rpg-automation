import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:crystal-river', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=6');
  await fish(page, 'Crystal River');
});
