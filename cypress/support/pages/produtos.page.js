/// <reference types="cypress" />



class ProdutosPage {

    selecionarProduto(num) {
        cy.get(':nth-child(' + num + ') > .pricebar > .btn_primary').click()
    }

    adicionarProdutos(num) {
        var array = [num]
        array.forEach(element => {
            this.selecionarProduto(array)
            //cy.get(':nth-child(' + element + ') > .pricebar > .btn_primary').click()
            
            console.log(array)
            console.log(element)
        });

    }



}
export default new ProdutosPage()
