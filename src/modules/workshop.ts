import { type Page } from "@playwright/test";
import { isExistsOnPage } from "#utils/isExists";
import { setTimeout } from "timers/promises";
import { ITEMS } from "src/data/items";
import { getTime } from '#utils/timestamp';

export const craftAll = async (page: Page, itemName: string) => {
  const itemInfo = ITEMS.find((i) => i.name === itemName);
  const buttonSelector = `.btngreen.craftbtn${itemInfo.id}`;
  const quantitySelector = `.qty.qty${itemInfo.id}`;

  const time = getTime();

  const creatable = await isExistsOnPage(page, buttonSelector);
  if (creatable) {
    const quantity = await page.locator(quantitySelector).getAttribute('value');
    await page.locator(buttonSelector).click();
    console.log(`(${time}) Crafted ${quantity} ${itemName}`);
  } else {
    console.log(`(${time}) Skip craft ${itemName}...`);
  }
  await setTimeout(2000);
};
