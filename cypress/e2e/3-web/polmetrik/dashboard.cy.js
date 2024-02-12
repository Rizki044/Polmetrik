import('../../../support/commands.js');

describe("Dashboard", () => {
    beforeEach(() => {
        cy.login()
    });

it("View Dashboard", () => {
    cy.get('body');
});

it("View Pantauan Tokoh", () => {
    cy.get('.css-1pupwqg').click()
    cy.get('body');
})

});