// Esto fue generado por el MCP Server de MidScene
import { test } from '../fixture';

test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 1000 });
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForLoadState('networkidle');
});

test('Login con usuario inválido', async ({ aiInput, aiTap, aiWaitFor, aiAssert }) => {
    await aiInput('incorrectUser', 'Username field');
    await aiInput('Password123', 'Password field');
    await aiTap('Submit button');
    await aiWaitFor('error message is displayed');
    await aiAssert('error message text is "Your username is invalid!"');
}); 