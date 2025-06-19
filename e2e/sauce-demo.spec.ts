import { test } from '../fixture';

test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 1000 });
    await page.goto('https://sauce-demo.myshopify.com/');
    await page.waitForLoadState('networkidle');
});

test('Realizar compra', async ({ ai, aiInput, aiTap, aiWaitFor, aiAssert }) => {
    //await aiInput('White sandals', 'search box');                     // Escribe <texto> en <input>
    await ai('type "White sandals" in searchbox and hit Enter');        // Secuencia de acciones
    await aiTap('White sandals img');
    await aiTap('ADD TO CART');                                         // Hace click en el lugar indicado
    await aiTap('Check Out');
    await aiWaitFor('Titulo My Cart is visible', { timeoutMs: 5000 });  // Espera la escena indicada
    await aiAssert('Total £25.00 is visible');                          // Verifica escena indicada
});
