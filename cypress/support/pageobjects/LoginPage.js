/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }
  
    
    LogarNoSite() {
        cy.get(loginElements.inputEmail()).type('teste000@test.com')
        cy.get(loginElements.inputSenha()).type('4kC8A3@kbUP4r8T')
        cy.get('#SubmitLogin > span').click()
        cy.get('.page-heading').should('contain', 'My account')
        
        
    }
}

export default LoginPage;