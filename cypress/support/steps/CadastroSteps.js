/* global Given, Then, When */

import CadastroPage from "../pageobjects/CadastroPage"
const cadastroPage = new CadastroPage



Given("acesso o site de compras", () => {
    cadastroPage.acessarSite();
})

When("acesso a pagina de login", () => {
    cadastroPage.clicarBotaoPaginaLogin();
})

Then("devo poder realizar o cadastro", () => {

    cadastroPage.informaremail();
    cadastroPage.preencherFormCad();

})








