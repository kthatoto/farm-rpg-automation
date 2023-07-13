import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { ITEMS } from "src/data/items";

export const explore = async (page: Page) => {
  while (true) {
    await page.locator('.item-content.explorebtn').click();
    const resultItems = await page.locator('#exploreconsole > #consoletxt > img').all();
    for (const item of resultItems) {
      const img = await item.getAttribute('src');
      const itemInfo = ITEMS.find((i) => i.img === img);
      if (itemInfo) console.log(itemInfo.name);
    }
    await setTimeout(5000);
  }
};
