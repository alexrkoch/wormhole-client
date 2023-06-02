import { expect, test } from '@playwright/test';

test('room code page has expected h1', async ({ page }) => {
	await page.goto('/room/WXYZ');
	await expect(page.getByRole('heading', { name: 'Room: WXYZ' })).toBeVisible();
});