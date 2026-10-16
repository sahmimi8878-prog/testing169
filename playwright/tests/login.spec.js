import { test, expect } from '@playwright/test';
// Test Case 1: ทดสอบ Login โดยใช้ getByLabel()
test('login', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');// เปิดเว็บไซต์หน้าล็อกอิน
        await page.getByLabel('Username').fill('student');// ค้นหาช่อง Username จาก Label แล้วกรอกชื่อ student
        await page.getByLabel('Password').fill('Password123'); // ค้นหาช่อง Password จาก Label แล้วกรอกรหัสผ่าน Password123
        // getByRole('button') ใช้ค้นหา Element ตามบทบาทว่าเป็นปุ่ม
        await page.getByRole('button',{name : 'Submit'}).click(); //rolsใช้พวกปุ่ม ค้นหาปุ่มที่มีชื่อ Submit แล้วคลิก
        expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');// ตรวจสอบว่า URL หลัง Login ตรงกับหน้าที่เข้าสู่ระบบสำเร็จ
});
// Test Case 2: ทดสอบ Login โดยใช้ locator() และ ID ของ Element
test('loginid', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.locator('#username').fill('student');// ค้นหาช่อง Username ด้วย ID #username แล้วกรอกข้อมูล
        await page.locator('#password').fill('Password123');
        await page.getByRole('button',{name : 'Submit'}).click(); //rolsใช้พวกปุ่ม // ค้นหาปุ่ม Submit แล้วคลิก
        expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');
});
// Test Case 3: ทดสอบ Login ด้วยโค้ดที่ได้จาก Codegen
test('testcodegen', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();// ค้นหา Textbox ที่มีชื่อ Username แล้วคลิก
  await page.getByRole('textbox', { name: 'Username' }).fill('student');// กรอก Username
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();// คลิกปุ่ม Submit เพื่อเข้าสู่ระบบ
});
// Test Case 4: ทดสอบ Login ด้วย Username และ Password ที่ไม่ถูกต้อง
test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
   // คลิกข้อความบนหน้าเว็บที่มีคำว่า Type username incorrectUser
    // เป็นคำสั่งที่ Codegen สร้างขึ้นจากการคลิกของผู้ใช้
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

/*เปิด Terminal
npx playwright codegen https://practicetestautomation.com/practice-test-login/
จะมีหน้าต่างเปิดขึ้นมา 2 ส่วน ได้แก่
- Browser — หน้าเว็บไซต์สำหรับให้เราทดลองคลิกและกรอกข้อมูล
- Playwright Inspector — หน้าต่างที่แสดงโค้ดซึ่งถูกสร้างขึ้นตามการกระทำของเรา

ตรวจสอบโค้ด แล้วรันด้วยคำสั่ง npx playwright test tests/login.spec.js */