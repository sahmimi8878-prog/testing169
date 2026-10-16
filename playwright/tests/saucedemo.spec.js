import { test, expect } from '@playwright/test';
test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
        await page.getByLabel('Username').fill('standard_user');
        await page.getByLabel('Password').fill('secret_sauce');
        await page.getByRole('button',{name : 'Login'}).click(); //rolsใช้พวกปุ่ม
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
        await page.getByRole('button',{name : 'Add to cart'}).click(); //rolsใช้พวกปุ่ม
});

test('loginid', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button',{name : 'Login'}).click(); //rolsใช้พวกปุ่ม
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="continue"]').click();
});

test('testcodegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);

  // Add two items
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

  // Go to cart and remove one
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);

  // Checkout info
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('90110');
  await page.locator('[data-test="continue"]').click();

  // Verify we reached the overview page
  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');

  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});

test('locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory/);

  // Add two items
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  // Go to cart and remove one
  await page.locator('.shopping_cart_link').click();
  await page.locator('#remove-sauce-labs-bike-light').click();
  await expect(page.locator('.cart_item')).toHaveCount(1);

  // Checkout info
  await page.locator('#checkout').click();
  await page.locator('#first-name').fill('John');
  await page.locator('#last-name').fill('Doe');
  await page.locator('#postal-code').fill('90110');
  await page.locator('#continue').click();

  // Verify overview page
  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Finish
  await page.locator('#finish').click();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});


