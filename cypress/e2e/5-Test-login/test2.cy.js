const testDataLogin = require("../../fixtures/login.json");
import loginPage from "../../support/page-object/loginPage"
describe("login1", () => {
  beforeEach(() => {
    cy.visit(
      "https://practicetestautomation.com/practice-test-login/?fbclid=IwY2xjawUhXsVleHRuA2FlbQIxMQBwZG9mAXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR70a6F3azbWK_4vbEKakMGZG5gk9HKXcs2UaiP7msQwrd-8oG5MTOVLoXrizA_aem_LnmHiLBdaowBhpcaah2rCQ",
    );
  });

  it("TC01-Open page", () => {
    cy.login1(testDataLogin.username.positive, testDataLogin.Password.positive);
    loginPage.verifyLoginSuccessText();
  });

  it("TC02  Negative username test", () => {
    cy.login1(testDataLogin.username.negative, testDataLogin.Password.positive);
    loginPage.verifyLoginErrorUsername('Your username is invalid!')
  });

  it("TC03 Negative password test", () => {
    cy.login1(testDataLogin.username.positive, testDataLogin.Password.negative);
    loginPage.verifyLoginErrorPassword('Your password is invalid!')
  });
});
