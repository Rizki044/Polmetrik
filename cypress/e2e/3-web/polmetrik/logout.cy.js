// const { before } = require("lodash");

import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });
})

it.only("Verify Success Logout", () => {
    cy.get('.css-9iedg7').click();
    cy.get('[tabindex="-1"] > .role="menuitem"').click();
});


