class CadastroElements {

    cadBotaoLogin = () => { return '.login' }

    emailCad = () => { return '#email_create' }

    botaoCreateAcount = () => {'#SubmitCreate > span'}

    radioGender = () => { return '#id_gender1' }
    //cy.get('#id_gender1').click();
    fieldName = () => {return '#customer_firstname'}
    //cy.get('#customer_firstname').type(faker.name.firstName());
    fieldLastName = () => {return '#customer_lastname'}
    //cy.get('#customer_lastname').type(faker.name.lastName());

     fieldPassw = () => { return '#passwd' }
    //cy.get('#passwd').type(faker.internet.password());

    selectDays = () => { return '#days' }
    //cy.get('#days').select('5').should('have.value', '5')
    
    selectMonths = () => { return '#months' }
    //cy.get().select('7').should('have.value', '7')


      selectYears  = () => { return '#years' }
    //cy.get('#years').select('1980').should('have.value', '1980')

    optin = () => { return '#optin' }
    //cy.get('#optin').click()

    companyName = () => { return '#company' }
    //cy.get('#company').type(faker.company.companyName())

     adress1 = () => { return '#address1' }
    //cy.get('#address1').type(faker.address.streetAddress())

    adress2 = () => { return '#address2' }
    //cy.get('#address2').type(faker.address.secondaryAddress())

    cityName = () => { return '#city' }
    //cy.get('#city').type(faker.address.city())

    idState = () => {'#id_state'}
    //cy.get('#id_state').select('Oklahoma').should('have.value', '36')

    postcode = () => {return '#postcode'}
    //cy.get('#postcode').type(faker.address.zipCodeByState())

    other = () => {return '#other' }
    //cy.get('#other').type(faker.lorem.paragraph())

    phone = () => {return '#phone' }
    //cy.get('#phone').type(faker.phone.phoneNumber())

    phone_mobile = () => {return '#phone_mobile' }
    //cy.get('#phone_mobile').type(faker.phone.phoneNumberFormat())

    alias = () => {return '#alias'} 
    //cy.get('#alias').clear()// Foi a forma que encontrei para a apafar o texto que estava no campo
    //cy.get('#alias').type(faker.internet.email())




}

export default CadastroElements;




