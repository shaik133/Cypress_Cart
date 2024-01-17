class CountryPage {
  constructor() {
    this.selectDropdown = "div[class='wrapperTwo'] select";
    this.checkAgree = "input[class='chkAgree']";
    this.proceedBtn = "div[class='wrapperTwo'] button";
  }

  selectCountry(countryName) {
    return cy.get(this.selectCountry).should("be.visible").select(countryName);
  }

  checkAgreeTerms() {
    return cy.get(this.checkAgree).check();
  }

  clickProceedBtn() {
    return cy.get(this.clickProceedBtn).click({ force: true });
  }
}

const countryPage = new CountryPage();
export default countryPage;
