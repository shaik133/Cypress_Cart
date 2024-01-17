import homePage from "../../support/pom_cart/homePage";

describe("Validating the homepage", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Validating the title of the page", function () {
    homePage.verifyLogoText("GREENKART");
  });

  it("validating current url of the page", function () {
    homePage.VerifyCurrentUrl(
      "https://rahulshettyacademy.com/seleniumPractise/#/"
    );
  });
  it("Validate the number of items present in the cart before adding any products to cart", function () {
    homePage.itemsInCart(0);
  });

  it("Validate the price of items present in the cart before adding any products to cart", function () {
    homePage.itemsInCart(0);
  });

  it("Validate the products listed in homepage of the app and add products to cart", function () {
    //homePage.noOfProductsListed(30);
    cy.get("h4[class='product-name']").should("have.length", 30);
    homePage.addItemsToCart("Orange");
  });

  it("Validate the price of items and price present in the cart  After adding any products to cart", function () {
    homePage.addItemsToCart("Orange");
    cy.wait(2000);
    homePage.itemsInCart(3);
    homePage.itemsPrice(166);
  });

  it("Validate the cart Icon is clickable", function () {
    homePage.addItemsToCart("Orange");
    homePage.clickCartIcon();
  });

  it("Validate the added items in cart preview section", function () {
    homePage.addItemsToCart("Orange");
    homePage.clickCartIcon();
    homePage.itemsInCartPreview();
  });

  it.only("Click proceed checkOut btn", function () {
    homePage.addItemsToCart("Orange");
    homePage.clickCartIcon();
    homePage.clickProceedCheckOutBtn();
    cy.url().should("contain", "cart");
  });
});
