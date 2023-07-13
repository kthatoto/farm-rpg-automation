import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:lake-minerva', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=9');
  await fish(page, 'Lake Minerva');
});
