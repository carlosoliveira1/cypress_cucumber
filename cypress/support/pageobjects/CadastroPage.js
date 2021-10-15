/// <reference types="Cypress" />


import CadastroElements from '../elements/CadastroElements'
const cadastroElements = new CadastroElements
const url = Cypress.config("baseUrl")
import faker from 'faker'
faker.locale = 'pt_BR'
//const faker = require('faker-br')




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
       
        cy.get(cadastroElements.emailCad()).type(faker.internet.email());
        cy.get('#SubmitCreate > span').click()

    }


    preencherFormCad() {
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(faker.name.firstName());
        cy.get('#customer_lastname').type(faker.name.lastName());
        cy.get('#passwd').type(faker.internet.password());
        cy.get('#days').select('5').should('have.value', '5')
        cy.get('#months').select('7').should('have.value', '7')
        cy.get('#years').select('1980').should('have.value', '1980')
        cy.get('#optin').click()
        cy.get('#company').type(faker.company.companyName())
        cy.get('#address1').type(faker.address.streetAddress())
        cy.get('#address2').type(faker.address.secondaryAddress())
        cy.get('#city').type(faker.address.city())
        cy.get('#id_state').select('Oklahoma').should('have.value', '36')
        cy.get('#postcode').type(faker.address.zipCodeByState())
        cy.get('#other').type(faker.lorem.paragraph())
        cy.get('#phone').type(faker.phone.phoneNumber())
        cy.get('#phone_mobile').type(faker.phone.phoneNumberFormat())
        cy.get('#alias').clear()// Foi a forma que encontrei para a apafar o texto que estava no campo
        cy.get('#alias').type(faker.internet.email())
        //cy.get('#submitAccount > span').click();




    }




}




export default CadastroPage;