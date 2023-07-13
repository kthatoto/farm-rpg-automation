import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:forest-pond', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=3');
  await fish(page, 'Forest Pond');
});
