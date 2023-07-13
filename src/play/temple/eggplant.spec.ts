import { test } from '@playwright/test';
import { sacrifice } from '#modules/temple';

test('temple:eggplant', async ({page}) => {
  await sacrifice(page, 'https://farmrpg.com/#!/templeitem.php?id=13');
});
