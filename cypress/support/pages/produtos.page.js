/// <reference types="cypress" />

class ProdutosPage {

    selecionarProduto(num) {
        cy.get('.btn_inventory').eq(num ).click()
        cy.get('.shopping_cart_link').click()
    }

    adicionarProdutos(num) {
        for (let i = 1; i <= num; i++) {
            cy.get('.btn_inventory').eq(i).click()
            //cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click()
        }
        cy.get('.shopping_cart_link').click()
    }

    adicionaProdutoPorNome(nomeProduto){
        cy.contains(nomeProduto).click()
    }

}
export default new ProdutosPage()
