import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:mount-banon', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=8');
  await explore(page);
});
