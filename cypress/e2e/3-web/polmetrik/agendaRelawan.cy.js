import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });


it("Agenda Relawan", () => {
    cy.get('#volunteer-agenda > a > .MuiButtonBase-root > .MuiPaper-root > img').click();
//filter tanggal
    cy.get('.MuiButtonBase-root > .MuiBox-root').click();
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiButtonBase-root').click();
    //Kegiatan Relawan
    cy.get('.MuiGrid-grid-md-4 > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root');
    cy.get('.MuiGrid-grid-md-4 > .MuiPaper-root > .MuiCardContent-root > a > .MuiButtonBase-root').click();
    cy.get('.css-1wxaqej > .MuiButtonBase-root').click();
    //cy.get(':nth-child(8) > .MuiButtonBase-root').click();

    });
});

