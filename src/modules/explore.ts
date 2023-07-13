import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const explore = async (page: Page) => {
  while (true) {
    await setTimeout(5000);
    await page.locator('.item-content.explorebtn').click();
  }
};
