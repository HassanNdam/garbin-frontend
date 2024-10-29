import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com'); // Ensure this URL is correct

  // Check the title
  await expect(page).toHaveTitle(/Example Domain/); // Adjust title regex if needed
});

test('get started link', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');

  // Check for the "Get Started" link
  const getStarted = page.locator('text=More information...'); // Adjust text if needed
  await expect(getStarted).toBeVisible();
});