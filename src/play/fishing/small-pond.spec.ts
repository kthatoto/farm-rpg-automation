import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:small-pond', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=1');
  await fish(page, 'Small Pond');
});
