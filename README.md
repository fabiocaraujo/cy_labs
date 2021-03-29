# Cypress - Labs 
## Projeto de Exemplo E2E no SauceLabs 

Saucelabs Demo: https://www.saucedemo.com/

### Cenários de Testes automatizados

#### Produtos: 
    ✓ Deve validar página de produto de um item da lista

    ✓ Deve validar botão "Adicionar no Carrinho" na página de produto

    ✓ Deve validar nome selecionado na pagina de produto

#### Checkout 
    ✓ Deve adicionar produto no carrinho

    ✓ Deve acrescentar mais um produto no carrinho
    
    ✓ Deve remover produto do carrinho
    
    ✓ Deve validar botão Continuar comprando

#### Funcionalidade: Cadastro 
    ✓ Deve validar cadastro com dados válidos - usando Faker
    
    ✓ Deve validar cadastro com dados válidos - usando Massa de dado Fixos
    
    ✓ Deve validar cadastro - Usando massa de dados em Fixture
    
    ✓ Deve validar mensagem de erro ao tentar cadastrar com campos vazios

#### E2E - Ponta a ponta
    ✓ E2E - Deve selecionar 4 produtos ao carrinho e finalizar compra


## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabiocaraujo/cy_labs.git
```
```
cd cy_labs
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```

#### Para executarVia Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Bibliotecas de apoio:
-Cypress: Framework de automação - https://cypress.io/

-Faker: Biblioteca para geração de massa de dados - https://www.npmjs.com/package/faker



### Boa diversão ;) 
Qualquer crítica ou sugestão é bem vinda! 



