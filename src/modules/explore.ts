import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { ITEMS } from "src/data/items";
import { getTime } from "#utils/timestamp";
import { nTimes } from "#utils/nTimes";

const gettingItems = {};
export const explore = async (page: Page, location: string, interval: number = 3000) => {
  while (true) {
    exploreN(page, location, 1, interval);
  }
};

export const exploreN = async (page: Page, location: string, n: number = 1, interval: number = 3000) => {
  await nTimes(async () => {
    await page.locator('.item-content.explorebtn').click();
    const resultItems = await page.locator('#exploreconsole > #consoletxt > img').all();
    for (const item of resultItems) {
      const img = await item.getAttribute('src');
      const itemInfo = ITEMS.find((i) => i.img === img);
      if (itemInfo) {
        const itemName = itemInfo.name;
        console.log('  ' + itemName);
        if (!gettingItems[itemName]) gettingItems[itemName] = 0;
        gettingItems[itemName]++;
      }
    }
    console.log('  ' + JSON.stringify(gettingItems));
    console.log(`${location}(${getTime()})`);
    await setTimeout(interval);
  }, n);
};
