import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const fish = async (page: Page) => {
  while (true) {
    await setTimeout(1000);
    const fishes = await page.locator('img.fish').all();
    fishes.forEach(async (fish) => {
      if (!(await fish.isVisible())) return;
      await fish.click({force: true});
      await setTimeout(500);
      for (const _ in new Array(30).fill(undefined)) {
        await page.locator('.fishing-block > .fc').click({position: {x: 275, y: 25}});
        await setTimeout(100);
      }
    });
  }
};
