/// <reference types="cypress" />
var faker = require('faker');
import cadastroPage from "../support/pages/cadastro.page"

describe('Funcionalidade: Cadastro - Usando Pages Objects e Massa de dados dinamica e fixa', () => {

    beforeEach(() => {
        cy.fixture('login').then((user) => {
            cy.login(user.standard_user, user.password)
        })
        cy.addProdutoCarrinho(1)
    });

    afterEach(() => {
        cy.resetAppState()
    });

    it('Deve validar cadastro com dados válidos - usando Massa de dadoa Fixas', () => {
        cadastroPage.cadastro("Fábio", "Araújo", "04233000")
        cy.get('.title').should('have.text', 'Checkout: Overview')
        cy.url().should('include', 'checkout-step-two')
    });

    it('Deve validar cadastro com dados válidos - Usando dados Faker', () => {
        //Gera dados fake para o teste
        var nomeFake = faker.name.firstName()
        var sobrenomeFake = faker.name.lastName()
        var cepFake = faker.address.zipCode()

        cadastroPage.cadastro(nomeFake, sobrenomeFake, cepFake)
        cy.get('.title').should('have.text', 'Checkout: Overview')
        cy.url().should('include', 'checkout-step-two')

    });

    it('Deve validar cadastro - Usando massa de dados em Fixture', () => {
        cy.fixture('cadastro').then((massaCadastro) => {
            cadastroPage.cadastro(
                massaCadastro[1].nome,
                massaCadastro[1].sobrenome,
                massaCadastro[1].cep)
        });
        cy.get('.title').should('have.text', 'Checkout: Overview')
        cy.url().should('include', 'checkout-step-two')
    });

    it('Deve validar mensagem de erro ao tentar cadastrar com campos vazios', () => {
        cy.get('.btn_primary').click()
        cy.get('.error-button').should('be.visible')
        cy.get('[data-test=error]').should('have.text', 'Error: First Name is required')
    });
});