/// <reference types="cypress" />

class ProdutosPage {

    selecionarProduto(num) {
        cy.get(':nth-child(' + num + ') > .pricebar > .btn_primary').click()
        cy.get('path').click() 
    }

    adicionarProdutos(num) {
        for (let i = 1; i <= num; i++) {
            cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click()
        }
        cy.get('path').click() 
    }

    adicionaProdutoPorNome(nomeProduto){
        cy.contains(nomeProduto).click()
    }

}
export default new ProdutosPage()
