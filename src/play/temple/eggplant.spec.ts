import { test } from '@playwright/test';
import { goto } from '#modules/goto';
import { sacrifice } from '#modules/temple';

test('temple:eggplant', async ({page}) => {
  await goto(page, 'https://farmrpg.com/#!/templeitem.php?id=13');
  await sacrifice(page);
});
