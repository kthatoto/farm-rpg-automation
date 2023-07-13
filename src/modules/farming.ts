import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { SEEDS } from "src/data/seeds";

export const farmingAll = async (page: Page, seedName: string) => {
  while (true) {
    await page.getByRole('link', { name: 'Harvest All Crops' }).click();
    const seedInfo = SEEDS.find((s) => s.name === seedName);
    await page.getByRole('combobox').selectOption(seedInfo.id.toString());
    await page.getByRole('link', { name: 'Plant All Selected' }).click();
    
    await setTimeout(60 * 1000);
  }
};
