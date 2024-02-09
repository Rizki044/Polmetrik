import('../../../support/commands.js');

describe('SearchFunctionality', () => {
    beforeEach(() => {
        cy.login()
    });
    it('Change first name and last name success', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear().type('')
        cy.get('#lastname').clear().type('')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
        cy.url().should('include', '/customer/account')
        // cy.get('.column > .message').should('be.visible')
    })

    it('Change email success', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-email').click()
        cy.get('#email').clear().type('')
        cy.get('#current-password').type('')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
        cy.url().should('include', '/customer/account')
        // cy.get('.column > .message').should('be.visible')
    })

    it.only('Failed Change password with no special character', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-password').click()
        cy.get('#current-password').type('')
        cy.get('#password').type('')
        cy.get('#password-confirmation').type('')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
        cy.url().should('include', '/customer/account')
        // cy.get('.column > .message').should('be.visible')
    })

    it('Change password success', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-password').click()
        cy.get('#current-password').type('apaaja@123')
        cy.get('#password').type('apaaja@321')
        cy.get('#password-confirmation').type('apaaja@321')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
        cy.url().should('include', '/customer/account')
        // cy.get('.column > .message').should('be.visible')
    })

    it('Failed Edit Email', () => {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#change-email').click()
        cy.get('#email').clear().type('')
        cy.get('#current-password').type('')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    
        cy.url().should('include', '/customer/account')
        // cy.get('.column > .message').should('be.visible')
    })
})