import { type Page } from "@playwright/test";

export const login = async (page: Page) => {
  await page.goto('https://farmrpg.com');
  await page.getByText('Login to your Account').click();
  await page.getByPlaceholder('Your username').fill(process.env.USERNAME!);
  await page.getByPlaceholder('Your password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
};
