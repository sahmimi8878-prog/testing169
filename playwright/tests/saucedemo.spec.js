import { test, expect } from '@playwright/test';
test('login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
        await page.getByLabel('Username').fill('standard_user');
        await page.getByLabel('Password').fill('secret_sauce');
        await page.getByRole('button',{name : 'Login'}).click(); //rolsใช้พวกปุ่ม
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); // ตรวจสอบว่าเข้าสู่หน้ารายการสินค้าแล้ว
        await page.getByRole('button',{name : 'Add to cart'}).click(); //rolsใช้พวกปุ่ม
});
// Test Case 2: Login โดยใช้ locator() และ ID
test('loginid', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');// เปิดเว็บไซต์ SauceDemo
        await page.locator('#user-name').fill('standard_user');// ค้นหาช่อง Username ด้วย ID แล้วกรอกข้อมูล
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button',{name : 'Login'}).click(); //rolsใช้พวกปุ่ม  // คลิกปุ่ม Login ด้วย Role และชื่อปุ่ม
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');// ตรวจสอบ URL หลังเข้าสู่ระบบ
});
// Test Case 3: Login เพิ่มสินค้า ลบสินค้า และเริ่ม Checkout
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();// เพิ่มสินค้า Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();// เปิดหน้าตะกร้าสินค้า
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();// ลบสินค้า Sauce Labs Bike Light ออกจากตะกร้า
  await page.locator('[data-test="checkout"]').click();// คลิก Checkout เพื่อไปหน้ากรอกข้อมูลผู้ซื้อ
  await page.locator('[data-test="continue"]').click();
});
// Test Case 4: ทดสอบกระบวนการสั่งซื้อครบทุกขั้นตอนด้วย data-test
test('testcodegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  // กรอก Username
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);// ตรวจสอบว่า URL มีคำว่า inventory
   // ----- เพิ่มสินค้า 2 ชิ้น -----
  // Add two items
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // เพิ่ม Sauce Labs Backpack ลงในตะกร้า
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // เพิ่ม Sauce Labs Bike Light ลงในตะกร้า
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');// ตรวจสอบว่าจำนวนสินค้าในตะกร้าเท่ากับ 2

  // Go to cart and remove one
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();// ลบ Sauce Labs Bike Light ออกจากตะกร้า
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);// ตรวจสอบว่าเหลือรายการสินค้า 1 รายการ


  // Checkout info
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('90110');
  await page.locator('[data-test="continue"]').click();// คลิก Continue เพื่อไปหน้าสรุปคำสั่งซื้อ

  // Verify we reached the overview page
  await expect(page).toHaveURL(/checkout-step-two/);// ตรวจสอบว่าอยู่หน้าสรุปคำสั่งซื้อ
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');// ตรวจสอบว่าสินค้าที่เหลือคือ Sauce Labs Backpack

  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!'); // ตรวจสอบข้อความยืนยันว่าการสั่งซื้อสำเร็จ
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


