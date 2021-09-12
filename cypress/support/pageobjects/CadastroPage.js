/// <reference types="Cypress" />


import CadastroElements from '../elements/CadastroElements'
const cadastroElements = new CadastroElements
const url = Cypress.config("baseUrl")
const faker = require('faker')

class CadastroPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(cadastroElements.cadBotaoLogin()).click()
    }

    informaremail() {
        cy.get(cadastroElements.emailCad()).type('carloso1@email.com');
        cy.get('#SubmitCreate > span').click()

    }

     
    preencherFormCad(){
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type('Carlos');
        cy.get('#customer_lastname').type('Oliveira');
        cy.get('#passwd').type('1234567');
        cy.get('#days').select('5').should('have.value', '5')
        cy.get('#months').select('7').should('have.value', '7')
        cy.get('#years').select('1980').should('have.value', '1980')
        cy.get('#optin').click()
        cy.get('#company').type('Conductor')
        cy.get('#address1').type('Rua do Carmo - 43 - 9º andar - 20011020  ')
        cy.get('#address2').type('Rio de janeiro - 36')
        cy.get('#city').type('Rio de janeiro')
        cy.get('#id_state').select('Oklahoma').should('have.value', '36')
        cy.get('#postcode').type('01200')
        cy.get('#other').type('Teste de campo de informação.')
        cy.get('#phone').type('9865479898')
        cy.get('#phone_mobile').type('9865479898')
        cy.get('#alias').clear()// Foi a forma que encontrei para a apafar o texto que estava no campo
        cy.get('#alias').type('carlosoloveiramauricio@gmail.com')
        //cy.get('#submitAccount > span').click();




    }




}

export default CadastroPage;