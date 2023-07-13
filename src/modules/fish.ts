import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const fish = async (page: Page) => {
  while (true) {
    await setTimeout(1000);
    const fishes = await page.locator('img.fish').all();
    fishes.forEach(async (fish) => {
      if (!(await fish.isVisible())) return;
      await fish.click({force: true});
      for (const _ of new Array(30).fill(undefined)) {
        await page.locator('.fishing-block > .fc').click({position: {x: 275, y: 25}});
        await setTimeout(100);
      }
      await setTimeout(1000);
      const result = await page.locator('#consoletxt').first().innerText();
      console.log(result);
    });
  }
};
