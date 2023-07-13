import { type Page } from "@playwright/test";

export const buyMax = async (page: Page, itemName: string) => {
  const item = page.getByRole('listitem').filter({ hasText: itemName });
  const isFull = await item.locator(':has-text("Inv Full")').isVisible();
  if (!isFull) {
    await item.getByRole('button', { name: '+MAX' }).click();
    await item.locator('button.buybtn').click();
    await page.getByText('Yes').click();
    await page.getByText('OK', { exact: true }).click();
  }
};
