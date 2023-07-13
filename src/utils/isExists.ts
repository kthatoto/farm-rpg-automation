import { Locator, Page } from "@playwright/test";

export const isExistsOnLocator = async (locator: Locator, selector: string) => {
  try {
    locator.locator(selector).isVisible();
    return true;
  } catch {
    return false;
  }
};

export const isExistsOnPage = async (page: Page, selector: string) => {
  return await page.$(selector).catch(() => null) !== null;
};
