import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:cane-pole-ridge', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=4');
  await explore(page, 'Cane Pole Ridge');
});
