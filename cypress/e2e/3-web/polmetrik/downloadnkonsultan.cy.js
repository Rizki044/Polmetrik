import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });

it("Download dan Konsultan", () => {
    cy.get('[href="/download-contact"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    //Download Raw Data
    cy.get(':nth-child(1) > a > .MuiList-root > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root > h1').click();
    cy.get('.css-1cd9izw > .css-1wxaqej > .MuiButtonBase-root').click();
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get('.MuiAutocomplete-endAdornment').type("analisadaily.com").click()
    cy.wait(500)
    cy.get(':nth-child(5) > .css-17lfqzq').click()
    cy.wait(500)
    cy.get('.css-16h4pan > .MuiButtonBase-root').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .MuiAvatar-root > img').click()
    cy.wait(500)
    



    






    });




});