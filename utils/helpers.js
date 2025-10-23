const username = process.env.username || 'aryan';
const password = process.env.password || '123';

async function randomEmail() {
    return `user_${Date.now()}@test.com`;
}

async function waitForNetworkIdle(page, timeout=10000) {
    await page.waitForLoadState('networkidle', {timeout})
}

module.exports = { username, password, randomEmail, waitForNetworkIdle }
