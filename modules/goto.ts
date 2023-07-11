import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const goto = async (page: Page, url: string) => {
  await page.goto(url);
  await page.reload();
  await setTimeout(1000);
};
