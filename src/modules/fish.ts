import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const fish = async (page: Page) => {
  try {
    let lastFishName = '';
    while (true) {
      await setTimeout(1000);
      const fishes = await page.locator('img.fish').all();
      fishes.forEach(async (fish) => {
        if (!(await fish.isVisible())) return;
        try { await fish.click({force: true}); } catch {}
        for (const _ of new Array(30).fill(undefined)) {
          const fcs = await page.locator('.picker-modal > .picker-modal-inner > .fishing-block > .fc').all();
          fcs[fcs.length - 1].click({position: {x: 275, y: 25}});
          await setTimeout(100);
        }
        await setTimeout(200);
        const result = page.locator('#consoletxt').first();
        const resultText = await result.innerText({ timeout: 100 });
        const resultTextArray = resultText.split("\n");
        const fishName = resultTextArray[resultTextArray.length - 1]
        if (fishName === lastFishName) return;
        lastFishName = fishName;
        console.log(fishName);
      });
    }
  } catch (e) {
    console.log(e);
  }
};
