// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('/')
    cy.get('#user-name').type(usuario)
    cy.get('#password').type(senha)
    cy.get('#login-button').click()
    cy.url().should('contains', 'inventory')
    cy.wait(900)
})

Cypress.Commands.add('addProdutoCarrinho', (num) => { 
    cy.get(':nth-child(' + num + ') > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').should('be.be.visible', 'true')
    cy.get('path').click()
    cy.get('.btn_action').click()
    cy.wait(500)
})

Cypress.Commands.add('resetAppState', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#reset_sidebar_link').click()
    cy.get('#inventory_sidebar_link').click()
    cy.wait(500)
})
