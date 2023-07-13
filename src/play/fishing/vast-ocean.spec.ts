import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:vast-ocean', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=8');
  await fish(page, 'Vast Ocean');
});
