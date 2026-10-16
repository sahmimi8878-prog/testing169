describe("SauceDemoShopify Testing", () => {
    //เปิดเว็บ เช็ค title
  it("TC01-open website and check title", () => {
    cy.visit("https://sauce-demo.myshopify.com");
    cy.title().should("include", "Sauce Demo");
    cy.contains("Sauce Demo").should("be.visible");
  });

  //เพิ่มสินค้าลงตะกร้าแล้ว cart count ต้องเพิ่มขึ้น
  it("TC02-add to cart increases cart count by 1", () => {
    cy.clearCookies();
    cy.visit("https://sauce-demo.myshopify.com/products/grey-jacket");
    cy.wait(3000);

    cy.get("#add").click();

    cy.contains("My Cart (1)").should("be.visible");
  });

  //ลบสินค้าออกจากตะกร้า
  it("TC03-remove product from cart", () => {
    cy.clearCookies();
    cy.visit("https://sauce-demo.myshopify.com/products/grey-jacket");
    cy.wait(3000);
    cy.get("#add").click();

    cy.contains("My Cart (1)").should("be.visible");

    cy.visit("https://sauce-demo.myshopify.com/cart");
    cy.wait(3000);

    cy.get('a[href*="/cart/change"][href*="quantity=0"]')
      .filter(":visible")
      .click();

    cy.contains("Grey jacket").should("not.exist");
    cy.get("#cart")
      .contains("your cart is currently empty")
      .should("be.visible");
  });
});
