const { expect, test } = require("playwright/test");

test("check the learn react link", async ({ page }) => {
  await page.goto('/')
  await page.locator('#root > div > header > a').click()
  console.log(page.url.toString())
  await expect(page).toHaveURL('http://localhost:3000')
});