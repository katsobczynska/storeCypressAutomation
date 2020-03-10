/// <reference types = 'Cypress'/>
import MainPage from './pageObjects/mainPage'
import ProductPage from './pageObjects/productPage'

describe('Navigation, positive scenario1: navigates to cart', function () {

})

it('Takes user to Cart page', function () {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    mainPage.getCartLink().click()
    cy.url().should('include', 'cart')
})

describe('Navigation, positive scenario2: navigates back to main page by home button', function () {

})

it('Takes user to home page', function () {
    cy.go('back')
    cy.url().should('eq', 'https://www.demoblaze.com/')
})

describe('Navigation, positive scenario3: navigates to contact window', function () {

})

it('Opens contact window', function () {
    const mainPage = new MainPage
    mainPage.getContactLink().click()
    cy.contains('New message')

})

describe('Navigation, positive scenario4: navigate to About us section', function () {

})
it('Opens About us window', function () {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    mainPage.getAboutUsButton().click()
    cy.contains('Close')
})

describe('Navigation, positive scenario5: navigate to Phones', function () {

})
it('Checks if elements are correctly displayed in Phone section', function () {

    const productPage = new ProductPage
    cy.visit(Cypress.env('url'))
    cy.contains('Phones').click()
    productPage.getProductBlock().should('be.visible')
    productPage.getProductImage().should('be.visible')
    productPage.getProductTitle().should('be.visible')
    productPage.getProductText().should('be.visible')
})

describe('Navigation, positive scenario6: navigate to Laptops', function () {

})
it('Checks if elements are correctly displayed in Laptops section', function () {

    const productPage = new ProductPage
    cy.visit(Cypress.env('url'))
    cy.contains('Laptops').click()
    productPage.getProductBlock().should('be.visible')
    productPage.getProductImage().should('be.visible')
    productPage.getProductTitle().should('be.visible')
    productPage.getProductText().should('be.visible')

})

describe('Navigation, positive scenario6: navigate to Monitors', function () {

})
it('Checks if elements are correctly displayed in Monitors section', function () {

    const productPage = new ProductPage
    cy.visit(Cypress.env('url'))
    cy.contains('Monitors').click()
    productPage.getProductBlock().should('be.visible')
    productPage.getProductImage().should('be.visible')
    productPage.getProductTitle().should('be.visible')
    productPage.getProductText().should('be.visible')

})

describe('Navigation, positive scenario7: individual item', function () {

})
it('Checks if elements are correctly displayed on individual item page', function () {
    const productPage = new ProductPage
    cy.visit(Cypress.env('url'))
    cy.get('a.hrefch').first().click()
    productPage.getItemName().should('be.visible')
    productPage.getItemImage().should('be.visible')
    productPage.getItemInformation().should('be.visible')
    productPage.getItemPrice().should('be.visible')
    productPage.getAddToCartButton().should('be.visible')

})