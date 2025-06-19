import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 90 * 1000,
  reporter: [
    ['list'],
    ['@midscene/web/playwright-report', { type: 'merged' }]
  ],
});
