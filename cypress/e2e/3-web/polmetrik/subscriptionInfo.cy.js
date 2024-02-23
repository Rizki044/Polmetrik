import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
    });
 

    it("Subscription Info",() => {
        cy.get('.css-1ogihpd').click();
        cy.get('[href="/setting-subscription/index"] > .MuiButtonBase-root > .MuiTypography-root').click();
        })
});