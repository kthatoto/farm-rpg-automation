import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const fish = async (page: Page) => {
  try {
    while (true) {
      await setTimeout(1000);
      const fishes = await page.locator('img.fish').all();
      fishes.forEach(async (fish) => {
        if (!(await fish.isVisible())) return;
        try { await fish.click({force: true}); } catch {}
        for (const _ of new Array(30).fill(undefined)) {
          await page.locator('.picker-modal > .picker-modal-inner > .fishing-block > .fc').click({position: {x: 275, y: 25}});
          await setTimeout(100);
        }
        await setTimeout(1000);
        const result = await page.locator('#consoletxt').first().innerText();
        const fishName = result.split("\n");
        console.log(fishName[fishName.length - 1]);
      });
    }
  } catch (e) {
    console.log(e);
  }
};
