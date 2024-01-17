class HomePage {
  constructor() {
    this.logoText = "div[class='brand greenLogo']";
    // searchBar: () => "input[class='search-keyword']",
    // inputSearchButton: () => "button[class='search-button']",
    // topDealsButton: () => "a[href*='offers']",
    this.noOfItemsInCart =
      "div[class='cart-info'] tr:nth-child(1) td:nth-child(3) strong";
    this.productsPrice =
      "div[class='cart-info'] tr:nth-child(2) td:nth-child(3) strong";
    this.cartIcon = "a[class='cart-icon'] img";
    this.addToCartbtn = "div[class='product-action'] button";
    this.products = "h4[class='product-name']";
    // incrementBtn: () => "a[class='increment']",
    // decrementBtn: () => "a[class='decrement']",
    this.checkOutBtn = "div[class='action-block'] button";
    this.itemsInCart =
      "div[class='cart-preview active'] li[class='cart-item'] p[class='product-name']";
  }

  verifyLogoText(logoT) {
    return cy.get(this.logoText).then(function (text) {
      let logo = text.text();
      expect(logo).to.eq(logoT);
    });
  }

  VerifyCurrentUrl(url) {
    return cy.url().should("include", url);
  }

  itemsInCart(count) {
    return cy.get(this.noOfItemsInCart).should("have.text", count);
  }

  itemsPrice(price) {
    return cy.get(this.productsPrice).should("have.text", price);
  }

  noOfProductsListed(count) {
    return cy.get(this.products).should("have.length", count);
  }

  addItemsToCart(product) {
    cy.readFile("cypress/fixtures/example.json", (err, data) => {
      if (err) {
        return console.error(err);
      }
    }).then((data) => {
      data.veggies[0] = product;
      cy.writeFile("cypress/fixtures/example.json", JSON.stringify(data));
    });
    return cy.get(this.products).each(($ele, index, list) => {
      let productName = $ele.text();
      let formatedProductName = productName.split(" ")[0].trim();
      cy.fixture("example").then((data) => {
        data.veggies.forEach((veg) => {
          if (formatedProductName == veg) {
            cy.get(this.addToCartbtn).eq(index).click();
            cy.get(this.addToCartbtn).should("have.class", "added");
          }
        });
      });
    });
  }

  clickCartIcon() {
    return cy.get(this.cartIcon).click();
  }

  itemsInCartPreview() {
    let names = [];
    let actualNames = ["Carrot", "Tomato", "Orange"];
    return cy
      .get(this.itemsInCart)
      .each(($ele, index, list) => {
        let product = $ele.text();
        let formatedProductName = product.split(" ")[0].trim();
        names.push(formatedProductName);
      })
      .then(() => {
        expect(names).to.deep.eq(actualNames);
      });
  }

  clickProceedCheckOutBtn() {
    return cy.get(this.checkOutBtn).eq(0).click({ force: true });
  }
}

const homePage = new HomePage();
export default homePage;
