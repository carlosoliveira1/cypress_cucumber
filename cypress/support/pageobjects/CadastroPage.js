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
    cy.get(cadastroElements.SubmitCreate()).click();
  }

  preencherFormCad() {
    cy.get(cadastroElements.radioGender()).click();
    cy.get(cadastroElements.firstname()).type(faker.name.firstName());
    cy.get(cadastroElements.lastname()).type(faker.name.lastName());
    cy.get(cadastroElements.fieldPassw()).type(faker.internet.password());
    cy.get(cadastroElements.selectDays()).select("5").should("have.value", "5");
    cy.get(cadastroElements.selectMonths())
      .select("7")
      .should("have.value", "7");
    cy.get(cadastroElements.years())
      .select("1980")
      .should("have.value", "1980");
    cy.get(cadastroElements.newsletter()).click();
    cy.get(cadastroElements.optin()).click();
    cy.get(cadastroElements.companyName()).type(faker.company.companyName());
    cy.get(cadastroElements.adress1()).type(faker.address.streetAddress());
    cy.get(cadastroElements.adress2()).type(faker.address.secondaryAddress());
    cy.get(cadastroElements.cityName()).type(faker.address.city());
    cy.get(cadastroElements.idState())
      .select("Oklahoma")
      .should("have.value", "36");
    cy.get(cadastroElements.postcode()).type(faker.address.zipCodeByState());
    cy.get(cadastroElements.other()).type(faker.lorem.paragraph());
    cy.get(cadastroElements.phone()).type(faker.phone.phoneNumber());
    cy.get(cadastroElements.phone_mobile()).type(
      faker.phone.phoneNumberFormat()
    );
    cy.get(cadastroElements.alias()).clear();
    cy.get(cadastroElements.alias()).type(faker.internet.email());
    //cy.get('#submitAccount > span').click();
  }
}

export default CadastroPage;
