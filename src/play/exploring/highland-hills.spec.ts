import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:highland-hills', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=3');
  await explore(page, 'Highland Hills');
});
