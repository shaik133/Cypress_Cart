import homePage from "../../support/pom_cart/homePage";
import cartPage from "../../support/pom_cart/cartPage";
import countryPage from "../../support/pom_cart/countryPage";

describe("Validate the country page elements", function () {
  beforeEach(function () {
    cy.visit("/");
    homePage.addItemsToCart("Orange");
    homePage.clickCartIcon();
    homePage.clickProceedCheckOutBtn();
    cy.url().should("contain", "cart");
    cartPage.getClickPlaceOrderBtn();
  });

  it("Validate the proceed of cart items", function () {
    cy.get("div[class='wrapperTwo'] select")
      .select("Chile")
      // countryPage
      //   .selectCountry("Chile")
      .should("be.visible")
      .should("have.value", "Chile");
    countryPage.checkAgreeTerms().should("be.checked");
    cy.get("div[class='wrapperTwo'] button").click();
    cy.get("div[class='wrapperTwo'] span:nth-child(1)").should(
      "contain",
      "Thank you, your order has been placed successfully"
    );
  });
});
