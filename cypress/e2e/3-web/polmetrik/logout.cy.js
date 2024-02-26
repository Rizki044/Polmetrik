// const { before } = require("lodash");

import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });


it("Verify Success Logout", () => {
  cy.get('.css-1ogihpd').click();
  cy.get('[href="/logout"] > .MuiButtonBase-root > .MuiTypography-root').click ();
  });
});

