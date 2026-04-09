import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.freepik.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: ' Continue with email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('chiropractorclub@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password ' }).fill('$121416Dollarbills');
  await page.getByRole('checkbox', { name: 'Stay logged in' }).check();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-54twg0bizpsr"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});