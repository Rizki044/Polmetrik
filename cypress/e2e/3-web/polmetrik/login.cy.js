describe('Login Functionality', () => {
  beforeEach(() => {
      cy.visit('https://app.polmetrik.id/login')
})

  it('Verify Failed Login invalid email address', () => {
      cy.get('#email').type('')
      cy.get('#pass').type('')
      cy.get('.action.login.primary').click()

      cy.get('#email-error').should('be.visible')
  })

it('Verify Failed Login Without email address', () => {
    cy.get('#pass').type('')
    cy.get('.action.login.primary').click()

    cy.get('.message-error').should('be.visible')
})

it('Verify Failed Login Without password', () => {
    cy.get('#email').type('')
    cy.get('.action.login.primary').click()

    cy.get('.message-error').should('be.visible')
})

it('Verify Failed Login Wrong Password', () => {
    cy.get('#email').type('')
    cy.get('#pass').type('')
    cy.get('.action.login.primary').click()

    cy.get('.message-error').should('be.visible')
})

it('Verify Success Login', () => {
    cy.get(':r0:-label').type('wakidah@binokular.net')
    cy.get('#KataSandi').type('Tina2024')
    cy.get('.action.login.primary').click()


    cy.url().should('include', '/customer/account/')
})
})