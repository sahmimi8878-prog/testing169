const testDataLogin = require("../../fixtures/login.json");
describe("login1", () => {
  beforeEach(() => {
    cy.visit(
      "https://practicetestautomation.com/practice-test-login/?fbclid=IwY2xjawUhXsVleHRuA2FlbQIxMQBwZG9mAXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR70a6F3azbWK_4vbEKakMGZG5gk9HKXcs2UaiP7msQwrd-8oG5MTOVLoXrizA_aem_LnmHiLBdaowBhpcaah2rCQ",
    );
  });

  it("TC01-Open page", () => {
    cy.login1(testDataLogin.username.positive, testDataLogin.Password.positive);
    /*cy.location().should((location) => {
      expect(location.pathname).to.eq("/logged-in-successfully/");
      expect(location.protocol).to.eq("https:");
    });*/
  });

  it("TC02  Negative username test", () => {
    cy.login1(testDataLogin.username.positive, testDataLogin.Password.negative);
    cy.get("#error").contains("Your username is invalid!");
    cy.get("#error").should("have.text", "Your username is invalid!");
  });

  it("TC03 Negative password test", () => {
    cy.login1(testDataLogin.username.positive, testDataLogin.Password.negative);
    cy.get("#error")
      .should("be.visible")
      .and("contain", "Your username is invalid!");
    cy.url().should("include", "/practice-test-login/");
  });
});
