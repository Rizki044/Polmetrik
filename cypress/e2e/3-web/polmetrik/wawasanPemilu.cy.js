import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });


it("Wawasan Pemilu", () => {
    cy.get('#insight-elektoral > a > .MuiButtonBase-root > .MuiPaper-root > img').click();
//Survei Terkini
    cy.get(':nth-child(1) > a > .MuiList-root > .MuiListItem-root > .MuiListItemText-root > .MuiTypography-root > h1').click();
    cy.get('.css-1wxaqej > .MuiButtonBase-root').click();
    cy.get('.rdrDateDisplayItemActive > input');

//Analisis Politik
    


    });




});