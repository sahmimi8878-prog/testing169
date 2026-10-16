import { test, expect } from '@playwright/test';
test('login', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.getByLabel('Username').fill('student');
        await page.getByLabel('Password').fill('Password123');
        await page.getByRole('button',{name : 'Submit'}).click(); //rolsใช้พวกปุ่ม
        expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
});

test('loginid', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.locator('#username').fill('student');
        await page.locator('#password').fill('Password123');
        await page.getByRole('button',{name : 'Submit'}).click(); //rolsใช้พวกปุ่ม
        expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
});

test('testcodegen', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByText('Type username incorrectUser').click();
  await page.getByText('Press "Enter" to skip to content Home Practice Courses AI Workshop Blog Contact').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('incorrectUser ');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#error').click();
  await page.locator('#error').click();
  await page.getByText('Type username student into').nth(1).click();
  await page.getByText('Press "Enter" to skip to content Home Practice Courses AI Workshop Blog Contact').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByText('Type password incorrectPassword into Password field').click();
  await page.getByText('Press "Enter" to skip to content Home Practice Courses AI Workshop Blog Contact').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Password' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Password' }).fill(' incorrectPassword ');
  await page.getByRole('button', { name: 'Submit' }).click();
});