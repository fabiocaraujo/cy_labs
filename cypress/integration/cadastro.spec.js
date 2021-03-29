/// <reference types="cypress" />
var faker = require('faker');
import cadastroPage from "../support/pages/cadastro.page"

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.fixture('login').then((user) => {
            cy.login(user.standard_user, user.password)
        })
        cy.addProdutoCarrinho(1)
    });

    afterEach(() => {
        cy.resetAppState()
    });

    //Gera dados fake para o teste
    var nome = faker.name.firstName()
    var sobrenome = faker.name.lastName()
    var cep = faker.address.zipCode()

    it('Deve validar cadastro com dados válidos - usando Faker', () => {
        cadastroPage.cadastro(nome, sobrenome, cep)
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    });

    it('Deve validar cadastro com dados válidos - usando Massa de dado Fixos', () => {
        cadastroPage.cadastro("Fábio", "Araújo", "04233000")
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    });

    it('Deve validar cadastro - Usando massa de dados em Fixture)', () => {
        // cadastroPage.cadastro(cadastroData[1].nome,cadastroData[1].sobrenome, cadastroData[1].cep)
        cy.fixture('cadastro').then((massaCadastro) => {
            cadastroPage.cadastro(
                massaCadastro[1].nome,
                massaCadastro[1].sobrenome,
                massaCadastro[1].cep)
        });
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    });

    it('Deve validar mensagem de erro ao tentar cadastrar com campos vazios', () => {
        cy.get('.btn_primary').click()
        cy.get('.error-button').should('be.visible')
        cy.get('[data-test=error]').should('have.text', 'Error: First Name is required')
    });
});