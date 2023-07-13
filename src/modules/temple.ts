import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { isExistsOnPage } from "#utils/isExists";
import { getTime } from "#utils/timestamp";

export const sacrifice = async (page: Page) => {
  while (true) {
    const selector = '.button.sacrificebtn';
    const hasItems = isExistsOnPage(page, selector);
    if (hasItems) {
      await page.locator(selector).click();
      console.log(`Sacrificed! (${getTime()})`);
    }
    await setTimeout(2 * 60 * 1000);
  }
};
