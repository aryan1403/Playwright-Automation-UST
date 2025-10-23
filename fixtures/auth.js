import { password, username, waitForNetworkIdle } from '../utils/helpers';

const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

export const test = base.extend({
    authenticatedPage: async ({ page }, use) => {
        // const context = browser.newContext();
        // const page = await context.newPage();

        const loginPage = new LoginPage(page);

        await loginPage.open();
        await waitForNetworkIdle(page);
        await loginPage.login(username, password);

        // await expect(page).toHaveURL(/dashboard/);
        await use(page);

        // await context.close();
    }
});