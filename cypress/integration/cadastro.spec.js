/// <reference types="cypress" />
var faker = require('faker');
import cadastroPage from "../support/pages/cadastro.page"

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.fixture("example").then((user) => {
            cy.login(user.standard_user, user.password)
        })
        cy.addProdutoCarrinho(1)
    });

    afterEach(() => {
        cy.resetAppState()
    });

    var nome = faker.name.firstName()
    var sobrenome = faker.name.lastName()
    var cep = faker.address.zipCode()
    
    it.only('Deve validar cadastro com dados válidos', () => {
        cadastroPage.cadastro(nome, sobrenome, cep)
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    });

    it('Deve validar mensagem de erro ao cadastrar com campo Nome vazio ', () => {
        cadastroPage.cadastro(' ', sobrenome, cep)
        cy.get('[data-test=error]').should('have.text', 'Error: First Name is required')
    });

    it('Deve validar mensagem de erro ao cadastrar com campo Sobrenome vazio ', () => {
        cadastroPage.cadastro(nome, ' ', cep)
        cy.get('[data-test=error]').should('have.text', 'Error: Last Name is required')
    });

    it('Deve validar mensagem de erro ao cadastrar com campo CEP vazio ', () => {
        cadastroPage.cadastro(nome, sobrenome, ' ')
        cy.get('[data-test=error]').should('have.text', 'Error: Postal Code is required')
    });


});