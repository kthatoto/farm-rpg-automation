import { Locator, Page } from "@playwright/test";

export const isExistsOnLocator = async (locator: Locator, selector: string) => {
  return (await locator.locator(selector).all()).length > 0;
};

export const isExistsOnPage = async (page: Page, selector: string) => {
  return await page.$(selector).catch(() => null) !== null;
};
