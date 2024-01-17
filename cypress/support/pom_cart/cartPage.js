class CartPage {
  constructor() {
    this.cartHeaders = "table[id='productCartTables'] td b";
    this.cartItems = "table[id='productCartTables'] tbody tr td:nth-child(2) p";
  }

  getProductsInCart(cartHeader) {
    return cy.get(this.cartHeaders).each(($ele, index, list) => {
      let productName = $ele.text();
      if (productName == cartHeader) {
        let ind = index + 1;
        cy.get(
          "table[id='productCartTables'] tbody tr td:nth-child(" + ind + ") p"
        ).each(($ele, index) => {
          cy.log($ele.text());
        });
      }
    });
  }

  getClickPlaceOrderBtn() {
    return cy.contains("Place Order").click();
  }
}

const cartPage = new CartPage();
export default cartPage;
