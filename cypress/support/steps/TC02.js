/* global Given, Then, When */


Given("Usuario no campo cadastro", () => {
    cy.visit('http://publicazo.insprak.com/sign_up')
})

When("Nao preenche nenhum campo", () => {
    
    cy.get('.btn').click()
    
})

Then("O sistema exibe uma mensagem de erro", () => { 
    cy.get(':nth-child(1) > .toast-message').should('contain', 'Fullname')
    //Nesse exemplo, usamos a função .get() com o seletor .toast-message
    //para obter o elemento de toast. Em seguida,
    //usamos o .invoke('text') para obter o texto contido nesse elemento. 
    //Por fim, usamos o .should('contain', 'Mensagem de confirmação') 
    //para verificar se o texto "Mensagem de confirmação" está presente na mensagem exibida.
})