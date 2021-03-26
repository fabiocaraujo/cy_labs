/// <reference types="cypress" />
//import usuarios from "../fixtures/users.json"
import cadastroPage from "../support/pages/cadastro.page"
import produtosPage from "../support/pages/produtos.page"

describe('End to End ', () => {

    before(() => {
        cy.visit("/")
        cy.fixture("example").then((user) => {
            cy.login(user.standard_user, user.password)
        })
        //cy.login(usuarios[0].login, usuarios[0].psw)
    });

    it('Validar página de produto de um item da lista', () => {
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.contains('Sauce Labs Backpack')
        //cy.get('.inventory_details_name').should('have.value', 'Sauce Labs Backpack')
    });

    it.only('E2E - Selecionar 2 prdutos ao carrinho e finalizar comprar', () => {
        //produtosPage.selecionarProduto(1) //Adicionar um item da lista
        produtosPage.adicionarProdutos(3) 
        cy.wait(2000)
        cy.get('.fa-layers-counter').contains('3')
        
        cy.get('path').click()
        cy.get('.btn_action').click()

        cadastroPage.cadastro('Fábio', 'Araújo', '04268040')
        
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

    });
});