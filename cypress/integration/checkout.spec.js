/// <reference types="cypress" />

describe('Funcionalidade: Checkout - Usando Custom Commands, JQuery e Método convertendo Texto em Valor', () => {

    before(() => {
        cy.visit('/')
        cy.fixture('login').then((user) => {
            cy.login(user.standard_user, user.password)
        })
    });

    it('Deve validar o total de 2 produtos na tela de resumo', () => {
        cy.adicionarProdutos(2)
        cy.get('[data-test=checkout]').click()
        cy.cadastro('Fábio', 'Araújo', '04330343')
            .then(() => {
                /*Comentário: 
                O valor deste resumo veio em String, ex. $9.99 e para somar o total foi preciso fazer 
                uma conversão fazendo um replace() para ignorar caracteres que não usado na soma e parseFloat() para converter string em Float 
                */
                const $p1 = Cypress.$(".inventory_item_price").eq(0).text();
                let precoConvertido1 = parseFloat($p1.replace('$', '0'));

                const $p2 = Cypress.$(".inventory_item_price").eq(1).text();
                let precoConvertido2 = parseFloat($p2.replace('$', ''));

                const $t3 = Cypress.$(".summary_subtotal_label").text();
                let totalConvertido = parseFloat($t3.replace('Item total: $', ''));

                expect(precoConvertido1 + precoConvertido2).to.be.gte(totalConvertido)
            })
    });
});


