import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });


it("Verify Success Logout", () => {
  cy.get('.css-1ogihpd').click();
  cy.wait(1000)
  cy.get('[href="/logout"] > .MuiButtonBase-root > .MuiTypography-root').click ();
  cy.wait(1000)
  });

});

