/// <reference types="cypress" />
import produtoPage from "../support/pages/produtos.page";

describe('Funcionalidade: Carrinho - Usando Pages Objects', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('login').then((user) => {
            cy.login(user.standard_user, user.password)
        })
    });

    afterEach(() => {
        cy.resetAppState()
    });

    it('Deve adicionar produto no carrinho', () => {
        produtoPage.selecionarProduto(1)
        cy.get('.shopping_cart_badge').contains(1)
        cy.get('.cart_quantity').should('be.exist')
        cy.get('.cart_item').should('not.be.empty')
    });

    it('Deve acrescentar mais um produto no carrinho', () => {
        produtoPage.selecionarProduto(1)
        cy.get('.shopping_cart_badge').contains(1)
        cy.get('[data-test=continue-shopping]').click()
        produtoPage.selecionarProduto(2)
        cy.get('.shopping_cart_badge').contains(2)
        cy.get('.cart_item').should('not.be.empty')
    });

    it('Deve remover produto do carrinho', () => {
        produtoPage.adicionarProdutos(1)
        cy.get('[data-test=remove-sauce-labs-bike-light]').click()
        cy.get('.shopping_cart_badge').should('not.exist')
        cy.get('.cart_item').should('not.exist')
    });
    it('Deve validar botão Continuar comprando', () => {
        produtoPage.adicionarProdutos(1)
        cy.get('[data-test=continue-shopping]').click()
        cy.url().should('include', 'inventory')
    });

    it.skip('Deve validar mensagem de erro ao avançar sem produtos no carrinho', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action').click()
        cy.contains('Error: ') // Este front não está tratando o carrinho vazio
    });
});