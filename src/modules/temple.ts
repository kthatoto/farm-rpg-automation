import { type Page } from "@playwright/test";
import { goto } from '#modules/goto';
import { setTimeout } from "timers/promises";
import { isExistsOnPage } from "#utils/isExists";
import { getTime } from "#utils/timestamp";

export const sacrifice = async (page: Page, url: string) => {
  while (true) {
    await goto(page, url);
    const selector = '.button.sacrificebtn';
    const hasItems = isExistsOnPage(page, selector);
    if (hasItems) {
      await page.locator(selector).click();
      await page.getByText('Yes').click();
      await page.getByText('OK', { exact: true }).click();
      console.log(`Sacrificed! (${getTime()})`);
    }
    await setTimeout(2 * 60 * 1000);
  }
};
