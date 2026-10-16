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

        cy.url().should('include','/inventory.html')
        //cy.url().should('eq','https://www.saucedemo.com/inventory.html')

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text','1')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text','2')
        
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

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text','1')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text','2')
        cy.get('.shopping_cart_badge').click()
        cy.contains('Your Cart').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.contains('Sauce Labs Backpack').should('not.exist')

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').should('be.visible')
        cy.get('[data-test="firstName"]').type('abc')
        cy.get('[data-test="lastName"]').type('defg')
        cy.get('[data-test="postalCode"]').type('1234')

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()

        



        
    })
})