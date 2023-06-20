import { expect, test } from '@playwright/test';

test('room code page has expected h1', async ({ page }) => {
	await page.goto('/room/WXYZ');
	await expect(page.getByRole('heading', { name: 'Room: WXYZ' })).toBeVisible();
});

test('CreateRoom and JoinRoom render correctly, Join code entry validation', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('create-room-button')).toBeVisible();
	const joinButton = page.getByTestId('join-button');
	const roomCodeInput = page.getByTestId('room-input');
	// join is disabled to start
	await expect(joinButton).toBeDisabled();
	// user inputs an invalid room code > join still disabled
	await roomCodeInput.fill('ABC');
	await expect(joinButton).toBeDisabled();
	// user inputs an valid room code > join enabled
	await roomCodeInput.fill('ABCDEF');
	await expect(joinButton).not.toBeDisabled();
});
