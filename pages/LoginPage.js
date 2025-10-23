class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("#username");
        this.passInput = page.locator("#pass");
        this.loginBtn = page.locator("#login")
    }

    async open() {
        await this.page.goto("http://127.0.0.1:5500/frontend/login.html")
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passInput.fill(password);
        // await this.page.waitForTimeout(5000); bad approach
        // expect(page.locator('#username')).toBeVisible();
        await this.loginBtn.click();
    }
}

module.exports = { LoginPage }