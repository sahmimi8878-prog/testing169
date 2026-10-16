describe('SaucrDemo Testing', () => {

    it('MUT01-open website' , () => {
        //testcase1
        cy.visit('https:/www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.wait(3000)

        cy.get('[data-test="username"]').type('standard_user')  // กรอก Username
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html') // ตรวจสอบว่าเข้าสู่หน้ารายการสินค้าแล้ว
        //cy.url().should('eq','https://www.saucedemo.com/inventory.html')

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // คลิกเพิ่มสินค้า Sauce Labs Backpack ลงในตะกร้า
        cy.get('.shopping_cart_badge').should('have.text','1')  // ตรวจสอบว่าจำนวนสินค้าในตะกร้าเท่ากับ 1 ชิ้น
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()// คลิกเพิ่มสินค้า Sauce Labs Bike Light ลงในตะกร้า
        cy.get('[data-test="shopping-cart-badge"]').should('have.text','2') // ตรวจสอบว่าจำนวนสินค้าในตะกร้าเท่ากับ 2 ชิ้น
        
    })

    it.only('MUT02-remove cart' , () => {
        //testcase1
        cy.visit('https:/www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        //cy.wait(3000)

        cy.get('[data-test="username"]').type('standard_user')
        //cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        //cy.wait(3000)
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        //cy.url().should('eq','https://www.saucedemo.com/inventory.html')

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()// เพิ่มสินค้า Sauce Labs Backpack ลงในตะกร้า
        cy.get('.shopping_cart_badge').should('have.text','1')// ตรวจสอบว่ามีสินค้าในตะกร้า 1 ชิ้น
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text','2')
        cy.get('.shopping_cart_badge').click() // คลิกไอคอนตะกร้าสินค้าเพื่อเปิดหน้าตะกร้า
        cy.contains('Your Cart').should('be.visible')// ตรวจสอบว่าหัวข้อ Your Cart แสดงอยู่
        cy.get('[data-test="remove-sauce-labs-backpack"]').click() // ลบสินค้า Sauce Labs Backpack ออกจากตะกร้า
        cy.contains('Sauce Labs Backpack').should('not.exist')// ตรวจสอบว่าสินค้า Sauce Labs Backpack ไม่อยู่ในหน้าแล้ว

        cy.get('[data-test="checkout"]').click()// คลิกปุ่ม Checkout เพื่อไปยังหน้ากรอกข้อมูลผู้ซื้อ

        cy.get('[data-test="firstName"]').should('be.visible')// ตรวจสอบว่าช่อง First Name แสดงอยู่
        cy.get('[data-test="firstName"]').type('abc')
        cy.get('[data-test="lastName"]').type('defg')
        cy.get('[data-test="postalCode"]').type('1234')// กรอกรหัสไปรษณีย์

        cy.get('[data-test="continue"]').click() // คลิก Continue เพื่อไปยังหน้าสรุปรายการสั่งซื้อ
        cy.get('[data-test="finish"]').click()// คลิก Finish เพื่อยืนยันการสั่งซื้อ

        



        
    })
})