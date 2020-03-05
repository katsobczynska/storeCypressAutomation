/// <reference types = 'Cypress'/>
import MainPage from './pageObjects/mainPage'

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
    const mainPage = new MainPage
    cy.go('back')
    cy.url().should('eq', 'https://www.demoblaze.com/')
})

describe('Navigation, positive scenario3: navigates to contact window', function() {

})

it('Opens contact window', function() {
    const mainPage = new MainPage
    mainPage.getContactLink().click()
    cy.contains('New message')
    //mainPage.getContactClose().click()
})

describe('Navigation, positive scenario4: navigate to About us section', function() {

})
it('Opens About us window', function() {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    mainPage.getAboutUsButton().click()
    cy.contains('Close')
})

describe('Navigation, positive scenario5: navigate to Phones', function() {

})
it('Opens Phones section', function() {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    cy.contains('Phones').click()
    cy.contains('iPhone')

})

describe('Navigation, positive scenario6: navigate to Laptops', function() {

})
it('Opens Laptops section', function() {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    cy.contains('Laptops').click()
    cy.contains('MacBook Pro')

})

describe('Navigation, positive scenario6: navigate to Monitors', function() {

})
it('Opens Monitors section', function() {
    const mainPage = new MainPage
    cy.visit(Cypress.env('url'))
    cy.contains('Monitors').click()
    cy.contains('ASUS Full HD')

})
