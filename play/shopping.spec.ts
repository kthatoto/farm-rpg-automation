import { test } from '@playwright/test';
import { login } from '#modules/login';
import { goto } from '#modules/goto';

test('shopping', async ({ page }) => {
  await login(page);

  await goto(page, 'https://farmrpg.com/index.php#!/store.php');

  const potato = page.getByRole('listitem').filter({ hasText: 'Potato Seeds' });
  const isPotatoFull = await potato.getByText('Inv Full').isVisible();
  if (!isPotatoFull) {
    await potato.getByRole('button', { name: '+MAX' }).click();
    await potato.getByRole('button', { name: 'Potato Seeds' }).click();
  }

  await page.pause();
});
