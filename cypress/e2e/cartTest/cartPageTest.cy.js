import homePage from "../../support/pom_cart/homePage";
import cartPage from "../../support/pom_cart/cartPage";

describe("Validate the cartPage elements", function () {
  beforeEach(function () {
    cy.visit("/");
    homePage.addItemsToCart("Orange");
    homePage.clickCartIcon();
    homePage.clickProceedCheckOutBtn();
    cy.url().should("contain", "cart");
  });

  it("Validate the selected products listed correctly in carttable", function () {
    cartPage.getProductsInCart("Price");
  });
  it("Click place order btn", function () {
    cartPage.getClickPlaceOrderBtn();
  });
});
