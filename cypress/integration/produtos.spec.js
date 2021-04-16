/// <reference types="cypress" />
import produtosPage from "../support/pages/produtos.page"

describe('Funcionalidade: Página de produtos - usando Pages Objects', () => {

    beforeEach(() => {
        cy.fixture('login').then((user) => {
            cy.login(user.standard_user, user.password)
        })
    });

    afterEach(() => {
        cy.resetAppState()
    });

    it('Deve validar página de produto de um item da lista', () => {
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.contains('Sauce Labs Backpack')
        cy.url().should('include', 'inventory-item')
    });

    it('Deve validar botão "Adicionar no Carrinho" na página de produto', () => {
        produtosPage.adicionaProdutoPorNome('Sauce Labs Backpack')
        cy.get('.btn_primary').click()
        cy.get('.shopping_cart_badge').should('contain', 1)
    });

    it('Deve validar nome selecionado na pagina de produto', () => {
        var produto = 'Sauce Labs Bike Light'
        produtosPage.adicionaProdutoPorNome(produto)
        cy.get('.inventory_details_name').should('have.text', produto)
    });
});