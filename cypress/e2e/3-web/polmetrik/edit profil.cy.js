// const { before } = require("lodash");

import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });

  it.only("Change first name and last name success", () => {
    cy.get('.css-1ogihpd').click();
    cy.get('[tabindex="0"] > .MuiButtonBase-root').click();
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click();
    cy.get(`input[name="first_name"]`).clear();
    cy.get(`input[name="first_name"]`).type('Tina');
    cy.get('input[name="last_name"]').clear();
    cy.get('input[name="last_name"]').type('Wulan');
    cy.get('.css-31avos', {timeout:30000} ).click();

    cy.url().should("include", "/customer/account");
    // cy.get('.column > .message').should('be.visible')
  });

  it("Change email success", () => {
    cy.get().click();
    cy.get("#change-email").click();
    cy.get("#email").clear().type("");
    cy.get("#current-password").type("");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();

    cy.url().should("include", "/customer/account");
    // cy.get('.column > .message').should('be.visible')
  });

  it.only("Failed Change password with no special character", () => {
    cy.get().click();
    cy.get("#change-password").click();
    cy.get("#current-password").type("");
    cy.get("#password").type("");
    cy.get("#password-confirmation").type("");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();

    cy.url().should("include", "/customer/account");
    // cy.get('.column > .message').should('be.visible')
  });

  it("Change password success", () => {
    cy.get().click();
    cy.get("#change-password").click();
    cy.get("#current-password").type("apaaja@123");
    cy.get("#password").type("apaaja@321");
    cy.get("#password-confirmation").type("apaaja@321");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();

    cy.url().should("include", "/customer/account");
    // cy.get('.column > .message').should('be.visible')
  });

  it("Failed Edit Email", () => {
    cy.get().click();
    cy.get("#change-email").click();
    cy.get("#email").clear().type("");
    cy.get("#current-password").type("");
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();

    cy.url().should("include", "/customer/account");
    // cy.get('.column > .message').should('be.visible')
  });
});
