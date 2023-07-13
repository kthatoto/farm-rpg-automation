import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { isExistsOnPage } from "#utils/isExists";

export const sacrifice = async (page: Page) => {
  while (true) {
    const selector = '.button.sacrificebtn';
    const hasItems = isExistsOnPage(page, selector);
    if (hasItems) {
      await page.locator(selector).click();
    }
    await setTimeout(2 * 60 * 1000);
  }
};
