describe('SaucrDemo Testing', () => {

    it('MUT01-open website' , () => {
        //testcase1
        cy.visit('https:/www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible') // ตรวจสอบว่าช่อง Username แสดงอยู่บนหน้าเว็บ
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.wait(3000)

        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()

        //cy.url().should('include','/inventory.html')
        cy.url().should('eq','https://www.saucedemo.com/inventory.html') // ตรวจสอบว่า URL เปลี่ยนไปยังหน้ารายการสินค้า
    })
    it('MUT02-wrong username/password',() => {
        cy.visit('https:/www.saucedemo.com') // เปิดเว็บไซต์ SauceDemo

        cy.get('[data-test="username"]').type('standard') // กรอก Username ที่ไม่ถูกต้อง
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()  // คลิกปุ่ม Login
        cy.get('[data-test="login-button"]').should('be.visible')// ตรวจสอบว่าปุ่ม Login ยังคงแสดงอยู่

        cy.get('[data-test="error"]').should('contain', 'do not match ')// ตรวจสอบว่ามีข้อความแจ้งเตือนว่า Username และ Password ไม่ตรงกัน
    })
    it('MUT03-wrong username/password',() => {
        cy.visit('https:/www.saucedemo.com')

        cy.get('[data-test="username"]').type('standard')
        cy.wait(3000)
        cy.get('[data-test="password"]').type('wrongpassword')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'do not match ')
    })
    it('MUT04-No username',() => {//ไม่มีusername
        cy.visit('https:/www.saucedemo.com')

        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Username is required ') // ตรวจสอบว่าระบบแจ้งเตือนว่าจำเป็นต้องกรอก Username
    })

    it('MUT05-No password',() => {//ไม่มีpassword
        cy.visit('https:/www.saucedemo.com')

        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(3000)
        //cy.get('[data-test="password"]').type('secret_sauce') // บรรทัดนี้ถูกปิดไว้ จึงไม่มีการกรอก Password
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click() // คลิกปุ่ม Login โดยไม่กรอก Password
        cy.get('[data-test="error"]').should('contain', 'password is required ')
    })


})