// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//describe('Log in - positive scenario', function () {
    Cypress.Commands.add("selectProduct", (expectedProductName) => { cy.get('h4.card-title').each(($e1,index, $list) => {
        if($e1.text().includes(expectedProductName))
        {  
        

            cy.get('a.hrefch').eq(index).click()
         
            cy.get('.col-sm-12 > .btn').click()
            cy.url().should('contain', '#')
            
        } 
    })
    
    
          
      })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
