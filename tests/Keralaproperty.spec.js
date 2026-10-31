import { test, expect } from '@playwright/test';

test('page title', async ({ page }) => {
  await page.goto("https://keralaproperty.in/member/register/");
   await expect(page).toHaveTitle("Real Estate Website in kerala -Buy,Sell,Rent Properties in Kerala | Kerala Property");

   await page.getByRole('combobox').selectOption("builder");
   await page.getByLabel("Name").fill("silna");
   await page.getByLabel("Email Address").fill("silna@example.com");
   await page.getByLabel("Password").fill("silna@123");
   await page.getByLabel("Confirm Password").fill("silna@123");
   
   await page.getByLabel("Phone / Mobile").fill("7559947487");
   await page.getByRole('button', { name: 'Register' }).click();

   await page.screenshot({ path: "screenshot.png" }, { fullpage: true });
   
});


