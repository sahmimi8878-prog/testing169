class loginPage{
    get loginSuccessText(){
        return cy.get('.post-title')
    }
    verifyLoginSuccessText() {
        this.loginSuccessText.should('have.text','Logged In Successfully')
    }

    get loginErrorUsername(){
        return cy.get('#error')
    }
    verifyLoginSuccessText() {
        this.loginSuccessText.should('have.text','Your username is invalid')
    }

    get loginErrorPassword(){
        return cy.get('#error')
    }
    verifyLoginSuccessText(Text) {
        this.loginSuccessText.should('have.text','Text')
    }

}

export default new loginPage();