import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });

it("Download dan Konsultan", () => {
    cy.get('[href="/download-contact"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    //Download Raw Data
    cy.get(':nth-child(1) > a > .MuiList-root > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root > h1').click();
    cy.wait(500)
    cy.get(':nth-child(2) > .MuiButton-outlined').click()
    cy.wait(500)
    cy.get('.MuiButtonBase-root > [data-testid="ArrowDropDownIcon"]').type("Online")
    cy.wait(500)
    






    });




});