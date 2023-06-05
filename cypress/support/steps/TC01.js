/* global Given, Then, When */
var faker = require('faker');

Given("Entro na campo cadastro", () => {
    cy.visit('http://publicazo.insprak.com/sign_up')
})

When("Prencho todos os 4 campos", () => {
    cy.get('#user_fullname').type( 'joao marcos' )
    cy.get('#user_email').type(faker.internet.email())
    cy.get('#user_password').type('123456')
    cy.get('#user_password_confirmation').type('123456')
    cy.get('.btn').click()
    
})



Then("O sistema exibe mensagem de sucesso", () => { 
    cy.get('body').invoke('text').should('contain', 'Bem-vindo')
    //Nesse exemplo, usamos a função .get() com o seletor .toast-message
    //para obter o elemento de toast. Em seguida,
    //usamos o .invoke('text') para obter o texto contido nesse elemento. 
    //Por fim, usamos o .should('contain', 'Mensagem de confirmação') 
    //para verificar se o texto "Mensagem de confirmação" está presente na mensagem exibida.
})