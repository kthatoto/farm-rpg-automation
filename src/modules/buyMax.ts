import { type Page } from "@playwright/test";
import { isExistsOnLocator } from "#utils/isExists";

export const buyMax = async (page: Page, itemName: string) => {
  const item = page.getByRole('listitem').filter({ hasText: itemName });
  const isFull = await isExistsOnLocator(item, ':has-text("Inv Full")');
  if (!isFull) {
    await item.getByRole('button', { name: '+MAX' }).click();
    await item.locator('button.buybtn').click();
    await page.getByText('Yes').click();
    await page.getByText('OK', { exact: true }).click();
    console.log('Bought', itemName, 'MAX!');
  }
};
