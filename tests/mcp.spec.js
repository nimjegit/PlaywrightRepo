const { test, expect } = require('@playwright/test');

test('Lab 1 - Element Lab form controls', async ({ page }) => {
  await page.goto('https://www.theqaindia.com/practice_platform.html');

  await expect(page).toHaveTitle(/QA INDIA/);
  await expect(page.getByRole('heading', { name: 'Element Lab' })).toBeVisible();

  await page.locator('#name').fill('Playwright Test');
  await page.locator('#email').fill('playwright@example.com');
  await page.locator('#phone').fill('5551234567');
  await page.locator('#textarea').fill('Lab 1 automation address');

  await expect(page.locator('#name')).toHaveValue('Playwright Test');
  await expect(page.locator('#email')).toHaveValue('playwright@example.com');
  await expect(page.locator('#phone')).toHaveValue('5551234567');
  await expect(page.locator('#textarea')).toHaveValue('Lab 1 automation address');

  const maleRadio = page.locator('input[name="gender"][value="male"]');
  const femaleRadio = page.locator('input[name="gender"][value="female"]');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();
  await femaleRadio.check();
  await expect(femaleRadio).toBeChecked();
  await expect(maleRadio).not.toBeChecked();

  const sundayCheckbox = page.locator('input[type="checkbox"][value="sun"]');
  const mondayCheckbox = page.locator('input[type="checkbox"][value="mon"]');
  await sundayCheckbox.check();
  await mondayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();
  await expect(mondayCheckbox).toBeChecked();

  await page.locator('#country').selectOption('USA');
  await expect(page.locator('#country')).toHaveValue('USA');

  const colors = page.locator('#colors');
  await colors.selectOption(['Red', 'Blue']);
  await expect(colors).toHaveValues(['Red', 'Blue']);
});
