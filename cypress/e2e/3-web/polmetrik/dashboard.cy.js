import('../../../support/commands.js');

describe("Dashboard", () => {
    beforeEach(() => {
        cy.login()
    });

it("View Dashboard", () => {
    cy.get('body');

    //Pantauan Persepsi Publik Menu Bawah
    cy.get('#monitoring > a > .MuiButtonBase-root > .MuiPaper-root > .MuiTypography-root').click();
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click();

    //Kandidat Kompetitor Menu Bawah
    cy.get('#competitor > a > .MuiButtonBase-root > .MuiPaper-root').click();
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click();

    //Agenda dan Relawan
    cy.get('#volunteer-agenda > a > .MuiButtonBase-root > .MuiPaper-root').click();
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click();

    //Wawasan Pemilu
    cy.get('#insight-elektoral > a > .MuiButtonBase-root > .MuiPaper-root').click();

    //Pantauan Persepsi Publik dari menu Atas
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    //filter Tanggal
    cy.get('.MuiButtonBase-root > .MuiBox-root').click();
    cy.get('.css-17q7xnh').click();
    //Percakapan Media Sosial
    //cy.get(':nth-child(1) > a > .MuiPaper-root > .MuiCardContent-root > .MuiBox-root > .css-1nn5yaj').click();
        
    //Kompetitor dari menu atas
    cy.get('[href="/competitor"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();

    });
});