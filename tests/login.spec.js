const { expect } = require("playwright/test");
const { test } = require("../fixtures/auth");
const { LoginPage } = require("../pages/LoginPage");
const { username, password, waitForNetworkIdle } = require("../utils/helpers");

test("User can login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await waitForNetworkIdle(page);
  await loginPage.login(username, password);

  await expect.soft(page).toHaveURL(/dashboard/);
});

test("dashboard loads for logged-in user @smoke", async ({ authenticatedPage }) => {
  await expect(authenticatedPage.locator(".dashboard")).toBeVisible();
});
