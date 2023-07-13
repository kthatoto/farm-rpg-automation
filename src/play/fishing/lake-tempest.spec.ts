import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { fish } from '#modules/fish';

test('fishing:lake-tempest', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/fishing.php?id=4');
  await fish(page, 'Lake Tempest');
});
