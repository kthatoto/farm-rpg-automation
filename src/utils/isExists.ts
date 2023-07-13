import { Locator, Page } from "@playwright/test";

export const isExistsOnLocator = async (locator: Locator, selector: string) => {
  try {
    await locator.locator(selector).isVisible();
    return false;
  } catch {
    return true;
  }
};

export const isExistsOnPage = async (page: Page, selector: string) => {
  return await page.$(selector).catch(() => null) !== null;
};
