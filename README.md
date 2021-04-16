# Cypress - Labs 
## Projeto de Exemplo E2E no SauceLabs 

Saucelabs Demo: https://www.saucedemo.com/

### Cenários de Testes automatizados

#### E2E - Teste de Ponta a ponta
Descrição: Pedido E2E - Validando todo o fluxo de Pedido - Usando Custom Commands e massa de dados dinâmica
    ✓ E2E - Deve adicionar 4 produtos ao carrinho, realizar o cadastro e finalizar compra

#### Funcionalidade: Cadastro
Descrição: Cadastro - Usando Pages Objects e Massa de dados dinâmica e fixa
    ✓ Deve validar cadastro com dados válidos - usando Massa de dadoa Fixas 
    ✓ Deve validar cadastro com dados válidos - Usando dados Faker
    ✓ Deve validar cadastro - Usando massa de dados em Fixture
    ✓ Deve validar mensagem de erro ao tentar cadastrar com campos vazios

#### Funcionalidade: Checkout
Descrição: Checkout usando Custom Commands, JQuery e Método convertendo Texto em Valor
    ✓ Deve validar o total de 2 produtos na tela de resumo 

#### Funcionalidade: Carrinho
Descrição: Carrinho - Usando Pages Objects
    ✓ Deve adicionar produto no carrinho
    ✓ Deve acrescentar mais um produto no carrinho
    ✓ Deve remover produto do carrinho
    ✓ Deve validar botão Continuar comprando
    ✓ Deve validar mensagem de erro ao avançar sem produtos no carrinho

#### Funcionalidade: Página de produtos
Funcionalidade: Página de produtos - usando Pages Objects
    ✓ Deve validar página de produto de um item da lista
    ✓ Deve validar botão "Adicionar no Carrinho" na página de produto
    ✓ Deve validar nome selecionado na pagina de produto


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

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

### Gerando relatórios:

```
npm run cy:report  
```

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 

### Boa diversão ;) 
Qualquer crítica ou sugestão é bem vinda! 



