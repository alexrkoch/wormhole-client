import { expect, test } from '@playwright/test';

test('room code page has expected h1', async ({ page }) => {
	await page.goto('/room/WXYZ');
	await expect(page.getByRole('heading', { name: 'Room: WXYZ' })).toBeVisible();
});

test('CreateRoom and JoinRoom render correctly, Join code entry validation', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('button', { name: 'Create a New Room' })).toBeVisible();
  const joinButton = page.getByRole('button', { name: 'Join Room' });
  const roomCodeInput = page.getByRole('textbox');
  // join is disabled to start
	await expect(joinButton).toBeDisabled();
  // user inputs an invalid room code > join still disabled
  await roomCodeInput.fill('ABC');
	await expect(joinButton).toBeDisabled();
  // user inputs an valid room code > join enabled
  await roomCodeInput.fill('ABCDEF');
	await expect(joinButton).not.toBeDisabled();
});
