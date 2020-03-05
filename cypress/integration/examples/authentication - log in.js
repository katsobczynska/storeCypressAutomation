/// <reference types = 'Cypress'/>

import MainPage from './pageObjects/mainPage'

describe('Log in - positive scenario', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Takes user through successfull log in process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getLogin().click()
        mainPage.getLoginUsername().click().type(this.data.username, {
            delay: 150
        })
        cy.wait(1000)
        mainPage.getLoginPassword().click().type(this.data.password, {
            delay: 150
        })
        mainPage.getLoginButton().click()
        mainPage.getLogOut().should('be.visible')
    })
})

describe('Log in - negative scenario1: empty username', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })

    it('Validates page behaviour when username is left empty during log in process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getLogin().click()
        mainPage.getLoginPassword().click().type(this.data.password, {
            delay: 100
        })
        mainPage.getLoginButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
        mainPage.getCancelLogin().click()
    })
})


describe('Log in - negative scenario2: empty password', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })

    it('Validates page behaviour when password is left empty during log in process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getLogin().click()
        mainPage.getLoginUsername().click().type(this.data.username, {
            delay: 100
        })
        mainPage.getLoginButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
        })
        mainPage.getCancelLogin().click()
    })
})

describe('Log in - negative scenario3: empty password & username', function () {

})
it('Validates page behaviour when username & password are left empty', function () {
    const mainPage = new MainPage()
    cy.visit(Cypress.env('url'))
    mainPage.getLogin().click()
    mainPage.getLoginButton().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Please fill out Username and Password.')
    })
    mainPage.getCancelLogin().click()

})

describe('Log in - negative scenario4: wrong username',function() {
    before(function() {
        cy.fixture('store').then(function (data) {
            this.data = data
        })


    })
it('Validates page behaviour when user inserts wrong username', function() {
    const mainPage = new MainPage()
    cy.visit(Cypress.env('url'))
    mainPage.getLogin().click()
    mainPage.getLoginUsername().click().type('wrongusername')
    mainPage.getLoginPassword().click().type(this.data.password, {delay:100})
    mainPage.getLoginButton().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal('User does not exist.')
    })
    mainPage.getCancelLogin().click()
})

describe('Log in - negative scenario5: wrong password',function() {
    before(function() {
        cy.fixture('store').then(function (data) {
            this.data = data
        })


    })
it('Validates page behaviour when user inserts wrong password', function() {
    const mainPage = new MainPage()
    cy.visit(Cypress.env('url'))
    mainPage.getLogin().click()
    mainPage.getLoginUsername().click().type(this.data.username, {delay:100})
    mainPage.getLoginPassword().click().type('wrongpass', {delay:100})
    mainPage.getLoginButton().click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Wrong password.')
    })
})

describe('Log in - positive scenario2: log out', function() {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })
    it('Takes user through successfull log out process', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))
        mainPage.getLogin().click()
        mainPage.getLoginUsername().click().type(this.data.username, {
            delay: 150
        })
        cy.wait(1000)
        mainPage.getLoginPassword().click().type(this.data.password, {
            delay: 150
        })
        mainPage.getLoginButton().click()
        cy.wait(1000)
        mainPage.getLogOut().click()
        mainPage.getLogin().should('be.visible')
})



})
})
})