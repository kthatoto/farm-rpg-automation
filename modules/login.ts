import { type Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const login = async (page: Page) => {
  await page.goto('https://farmrpg.com');
  await page.getByText('Login to your Account').click();
  await page.getByPlaceholder('Your username').fill(process.env.USERNAME!);
  await page.getByPlaceholder('Your password').fill(process.env.PASSWORD!);
  await setTimeout(1000);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL("https://farmrpg.com/index.php");
};
