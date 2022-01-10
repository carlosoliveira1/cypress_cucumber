/// <reference types="Cypress" />

import CadastroElements from "../elements/CadastroElements";
const cadastroElements = new CadastroElements();
const url = Cypress.config("baseUrl");
import faker from "faker";
faker.locale = "pt_BR";
//const faker = require('faker-br')

class CadastroPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  // Clica no botão que acessa a página de login do site
  clicarBotaoPaginaLogin() {
    cy.get(cadastroElements.cadBotaoLogin()).click();
  }

  informaremail() {
    cy.get(cadastroElements.emailCad()).type(faker.internet.email());
    cy.get("#SubmitCreate > span").click();
  }

  preencherFormCad() {
    cy.get('input[id="id_gender1"]').click();
    cy.get('input[id="customer_firstname"]').type(faker.name.firstName());
    cy.get('input[name="customer_lastname"]').type(faker.name.lastName());
    cy.get('input[type="password"]').type(faker.internet.password());
    cy.get('select[name="days"]').select("5").should("have.value", "5");
    cy.get('select[name="months"]').select("7").should("have.value", "7");
    cy.get('select[name="years"]').select("1980").should("have.value", "1980");
    cy.get('input[type="checkbox"][name="newsletter').click();
    cy.get('input[type="checkbox"][name="optin"]').click();
    cy.get('input[name="company"]').type(faker.company.companyName());
    cy.get('input[name="address1"]').type(faker.address.streetAddress());
    cy.get('input[name="address2"]').type(faker.address.secondaryAddress());
    cy.get('input[name="city"]').type(faker.address.city());
    cy.get('select[name="id_state"]').select("Oklahoma").should("have.value", "36");
    cy.get('input[name="postcode"]').type(faker.address.zipCodeByState());
    cy.get( 'textarea[name="other"]').type(faker.lorem.paragraph());
    cy.get('input[name="phone"]').type(faker.phone.phoneNumber());
    cy.get( 'input[name="phone_mobile"]').type(faker.phone.phoneNumberFormat());
    cy.get('input[name="alias"]').clear(); // Foi a forma que encontrei para a apafar o texto que estava no campo
    cy.get('input[name="alias"]').type(faker.internet.email());
    //cy.get('#submitAccount > span').click();
  }
}

export default CadastroPage;
