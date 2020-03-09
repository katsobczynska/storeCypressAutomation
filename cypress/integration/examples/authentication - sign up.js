/// <reference types = 'Cypress'/>

import MainPage from './pageObjects/mainPage'

//Positve sign up flow is not covered so tested page is not overloaded with useless data

describe('Sign up - negative scenario1: user already exists', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Throws an error if user already exists', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getSignup().click()
        cy.wait(1000)
        mainPage.getSignUsername().click().type(this.data.username)
        mainPage.getSignPassword().click().type(this.data.password)
        mainPage.getSignUpButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.')

        })
        mainPage.getCancelSignUpButton().click()

    })
})

describe('Sign up - negative scenario2: cancel sign up', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Breaks sign up process when user use cancel button', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getSignup().click()
        cy.wait(1000)
        mainPage.getCancelSignUpButton().click()
        cy.get('#sign-password').should('not.be.visible')
    })

})

describe('Sign up - negative scenario3: empty username', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Validates page behaviour when username is left empty during sign up process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getSignup().click()
        cy.wait(1000)
        mainPage.getSignPassword().click().type(this.data.password)
        mainPage.getSignUpButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
        mainPage.getCancelSignUpButton().click()

    })
})

describe('Sign up - negative scenario4: empty password', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Validates page behaviour when password is left empty during sign up process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getSignup().click()
        cy.wait(1000)
        mainPage.getSignUsername().click().type(this.data.username)
        mainPage.getSignUpButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
        mainPage.getCancelSignUpButton().click()

    })
})

describe('Sign up - negative scenario5: empty password & username', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Validates page behaviour when password & username are left empty during sign up process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getSignup().click()
        cy.wait(1000)
        mainPage.getSignUpButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
        mainPage.getCancelSignUpButton().click()

    })
})