import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:misty-forest', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=5');
  await explore(page);
});
