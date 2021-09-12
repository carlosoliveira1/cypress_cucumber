/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site de compras", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo logar no site de compras", () => {
    
    loginPage.realizarLogin();

})
