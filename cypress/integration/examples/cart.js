/// <reference types = 'Cypress'/>

import MainPage from './pageObjects/mainPage'
import ProductPage from './pageObjects/productPage'


describe('Cart - positive scenario1: add product to cart', function () {

})

it('Adds product to cart', function () {
    const mainPage = new MainPage()
    const productPage = new ProductPage()
    cy.visit(Cypress.env('url'))
    cy.contains('Samsung galaxy s7').click()
    cy.wait(1000)
    productPage.getAddToCartButton().click()
    cy.wait(1000)
    mainPage.getCartLink().click()
    cy.url().should('eq', 'https://www.demoblaze.com/cart.html')



})
describe('Cart - positive scenario2: delete product from cart', function () {

})
it('Deletes product from cart', function () {
    const mainPage = new MainPage()
    cy.visit(Cypress.env('url'))
    const productPage = new ProductPage()
    cy.wait(2000)
    cy.get('Samsung galaxy s7')
    productPage.getDeleteButton().click()
    cy.get('Samsung galaxy s7').should('not.be.visible')
})
/*

*/
describe('Cart - positive scenario3: sum and validate amount', function() {
    
})
it('Calculate price of two products and validates', function() {
    const mainPage = new MainPage()
    const productPage = new ProductPage()
    cy.visit(Cypress.env('url'))
    cy.contains('Samsung galaxy s7').click()
    cy.wait(2000)
    productPage.getAddToCartButton().click()
    cy.wait(2000)
    cy.visit(Cypress.env('url'))
    cy.contains('Nexus 6').click()
    cy.wait(2000)
    productPage.getAddToCartButton().click()
    cy.wait(2000)
    mainPage.getCartLink().click()
    cy.wait(4000)
    var sum =0
    cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
       const amount=$el.text() 
       var res = amount
    
       sum = Number(sum) + Number(res) 

    }).then(function()
    {
      cy.log(sum)
    })
    cy.get('#totalp').then(function(element)
    {
        const amount = element.text()
        var res = amount
        var total = res
        expect(Number(total)).to.equal(sum)
    })
})



//totalp