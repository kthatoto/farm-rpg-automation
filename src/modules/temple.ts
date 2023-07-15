import { type Page } from "@playwright/test";
import { goto } from '#modules/goto';
import { setTimeout } from "timers/promises";
import { isExistsOnPage } from "#utils/isExists";
import { getTime } from "#utils/timestamp";
import { nTimes } from "#utils/nTimes";

export const sacrifice = async (page: Page, url: string, interval: number = 2 * 60 * 1000) => {
  while (true) {
    await sacrificeN(page, url, 1, interval);
  }
};

export const sacrificeN = async (page: Page, url: string, n: number = 1, interval: number = 2 * 60 * 1000) => {
  await nTimes(async () => {
    await goto(page, url);
    const selector = '.button.sacrificebtn';
    const hasItems = await isExistsOnPage(page, selector);
    if (hasItems) {
      await page.locator(selector).click();
      await page.getByText('Yes').click();
      await page.getByText('OK', { exact: true }).click();
      console.log(`Sacrificed! (${getTime()})`);
    } else {
      console.log('No items sacrificed...');
    }
    await setTimeout(interval);
  }, n);
};
