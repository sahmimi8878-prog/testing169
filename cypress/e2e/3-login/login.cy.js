describe('SaucrDemo Testing', () => {

    it('MUT01-open website' , () => {
        //testcase1
        cy.visit('https:/www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.wait(3000)

        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()

        //cy.url().should('include','/inventory.html')
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    })
    it('MUT02-wrong username/password',() => {
        cy.visit('https:/www.saucedemo.com')

        cy.get('[data-test="username"]').type('standard')
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'do not match ')
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
        cy.get('[data-test="error"]').should('contain', 'Username is required ')
    })

    it('MUT05-No password',() => {//ไม่มีpassword
        cy.visit('https:/www.saucedemo.com')

        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(3000)
        //cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(3000)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'password is required ')
    })


})