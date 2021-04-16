
Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('/')
    cy.get('#user-name').type(usuario)
    cy.get('#password').type(senha)
    cy.get('#login-button').click()
    cy.log(`Logado com: ${usuario}`)
})

Cypress.Commands.add('addProdutoCarrinho', (num) => {
    cy.get('.btn_inventory').eq(num).click()
    cy.get('.shopping_cart_badge').should('be.be.visible', 'true')
    cy.get('.shopping_cart_link').click()
    cy.get('.btn_action').click()
})

Cypress.Commands.add('resetAppState', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#reset_sidebar_link').click()
    cy.get('#inventory_sidebar_link').click()
})

Cypress.Commands.add('adicionarProdutos', (num) => {
    for (let i = 1; i <= num; i++) {
        cy.get('.btn_inventory').eq(i).click()
    }
    cy.get('.shopping_cart_link').click()
})

Cypress.Commands.add('cadastro', (nome, sobrenome, cep) => {
    cy.get('[data-test=firstName]').type(nome)
    cy.get('[data-test=lastName]').type(sobrenome)
    cy.get('[data-test=postalCode]').type(cep)
    cy.get('.btn_primary').click()
})


