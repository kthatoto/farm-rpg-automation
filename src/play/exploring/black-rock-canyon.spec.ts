
import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:black-rock-canyon', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=6');
  await explore(page);
});
