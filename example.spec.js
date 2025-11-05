// @ts-check
import { test, expect } from '@playwright/test';

test('view Jane Doe', async ({ page }) => {

  const email = 'customer@practicesoftwaretesting.com';
  const password = 'welcome01';

  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.fill('#email', email);
  await page.fill('#password', password);
  await expect(page).toHaveTitle('Jane Doe');
});