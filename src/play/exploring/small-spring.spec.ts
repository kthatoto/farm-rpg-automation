import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { explore } from '#modules/explore';

test('exploring:small-spring', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/area.php?id=2');
  await explore(page, 'Small Spring');
});
