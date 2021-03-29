/// <reference types="cypress" />
import produtoPage from "../support/pages/produtos.page";

describe('Funcionalidade: Carrinho', () => {

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
        cy.get('.fa-layers-counter').contains(1)
        cy.get('.cart_quantity').should('be.exist')
    });

    it('Deve acrescentar mais um produto no carrinho', () => {
        produtoPage.selecionarProduto(1)
        cy.get('.fa-layers-counter').contains(1)
        cy.contains('Continue Shopping').click()
        produtoPage.selecionarProduto(2)
        cy.get('.fa-layers-counter').contains(2)
    });

    it('Deve remover produto do carrinho', () => {
        produtoPage.adicionarProdutos(1)
        cy.contains('REMOVE').click()
        cy.get('.fa-layers-counter').should('not.exist')
    });
    it('Deve validar botão Continuar comprando', () => {
        produtoPage.adicionarProdutos(1)
        cy.contains('Continue Shopping').click()
        cy.url().should('include', 'inventory')
    });

    it.skip('Deve validar mensagem de erro ao avançar sem produtos no carrinho', () => {
        cy.get('path').click()
        cy.get('.btn_action').click()
        cy.contains('Error: ') // Este front não está tratando o carrinho vazio
    });
});