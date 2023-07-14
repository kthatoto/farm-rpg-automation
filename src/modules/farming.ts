import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";
import { SEEDS } from "src/data/seeds";
import { nTimes } from "#utils/nTimes";

export const farmingAll = async (page: Page, seedName: string, interval: number = 20 * 1000) => {
  while (true) {
    farmingAllN(page, seedName, 1, interval);
  }
};

export const farmingAllN = async (page: Page, seedName: string, n: number = 1, interval: number = 20 * 1000) => {
  await nTimes(async () => {
    await page.getByRole('link', { name: 'Harvest All Crops' }).click();
    const seedInfo = SEEDS.find((s) => s.name === seedName);
    await page.getByRole('combobox').selectOption(seedInfo.id.toString());
    await page.getByRole('link', { name: 'Plant All Selected' }).click();

    await setTimeout(interval);
  }, n);
};
