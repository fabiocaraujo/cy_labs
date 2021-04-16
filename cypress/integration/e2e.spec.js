/// <reference types="cypress" />
var faker = require('faker');

describe('Pedido E2E - Validando todo o fluxo de Pedido - Usando Custom Commands e Massa de dados dinâmica', () => {

    before(() => {
        cy.visit("/")
        cy.fixture("login").then((user) => {
            cy.login(user.standard_user, user.password)
        })
    });

    //Gera dados fakes para os testes
    var nomeFake = faker.name.firstName()
    var sobrenomeFake = faker.name.lastName()
    var cepFake = faker.address.zipCode()

    it('E2E - Deve adicionar 4 produtos ao carrinho, realizar o cadastro e finalizar compra', () => {
        cy.adicionarProdutos(4)
        cy.get('.shopping_cart_badge').contains(4)
        cy.get('.cart_item').should('not.be.empty')
        cy.get('.btn_action').click()
        cy.cadastro(nomeFake, sobrenomeFake, cepFake) 
        cy.get('.btn_action').click() 
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.url().should('include', 'checkout-complete')
    });
});