import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:ember-lagoon', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=9');
  await explore(page);
});
