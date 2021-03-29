/// <reference types="cypress" />
import cadastroPage from "../support/pages/cadastro.page"
import produtosPage from "../support/pages/produtos.page"
var faker = require('faker');

describe('Pedido End to End', () => {

    before(() => {
        cy.visit("/")
        cy.fixture("login").then((user) => {
            cy.login(user.standard_user, user.password)
        })
    });

    //Gera dados fakes para os testes
    var nome = faker.name.firstName()
    var sobrenome = faker.name.lastName()
    var cep = faker.address.zipCode()

    it('E2E - Deve selecionar 4 produtos ao carrinho e finalizar compra', () => {
        produtosPage.adicionarProdutos(4)
        cy.get('.fa-layers-counter').contains(4) // Valida qtd de produtos no carrinho
        cy.get('.btn_action').click() //Avança para o cadastro
        cadastroPage.cadastro(nome, sobrenome, cep)
        cy.get('.btn_action').click() //Avança para o resumo do pedido
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    });
});