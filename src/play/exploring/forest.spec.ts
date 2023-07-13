import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:forest', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=7');
  await explore(page, 'Forest');
});
