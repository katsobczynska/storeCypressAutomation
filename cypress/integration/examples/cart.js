/// <reference types = 'Cypress'/>

import MainPage from './pageObjects/mainPage'
import ProductPage from './pageObjects/productPage'
import CartPage from './pageObjects/cartPage'


describe('Cart - positive scenario1: add product to cart', function () {
    before(function () {
        cy.fixture('store').then(function (data) {
            this.data = data
        })
    })

    it('Adds product to cart', function () {
        const mainPage = new MainPage()
        cy.visit(Cypress.env('url'))

        cy.selectProduct(this.data.expectedProductNames[0])
        
        mainPage.getCartLink().click()
        cy.url().should('eq', 'https://www.demoblaze.com/cart.html')
         
        cy.contains(this.data.expectedProductNames[0])



    })
    describe('Cart - positive scenario2: delete product from cart', function () {
        before(function () {
            cy.fixture('store').then(function (data) {
                this.data = data
            })
        })
        it('Deletes product from cart', function () {
            const mainPage = new MainPage()
            const productPage = new ProductPage()
            cy.visit(Cypress.env('url'))
            cy.selectProduct(this.data.expectedProductNames[0])
            mainPage.getCartLink().click()
            cy.url().should('eq', 'https://www.demoblaze.com/cart.html')
            cy.contains(this.data.expectedProductNames[0])
            productPage.getDeleteButton().click()
            cy.get(this.data.expectedProductNames[0]).should('not.be.visible')
            })
        })

        describe('Cart - positive scenario3: sum and validate amount', function () {
            before(function () {
                cy.fixture('store').then(function (data) {
                    this.data = data
                })
            })
            it('Calculates price of two products and validates', function () {
                const mainPage = new MainPage()            


                this.data.expectedProductNames.forEach(function (element) {
                    cy.visit(Cypress.env('url'))
                    cy.selectProduct(element)

                });
                
                cy.visit(Cypress.env('url'))
                 
                mainPage.getCartLink().click()
               
                var sum = 0
                cy.get('tr td:nth-child(3)').each(($el, index, $list) => {
                    const amount = $el.text()
                    var res = amount

                    sum = Number(sum) + Number(res)

                })
                cy.get('#totalp').then(function (element) {
                    const amount = element.text()
                    var res = amount
                    var total = res
                    expect(Number(total)).to.equal(sum)
                })
            })

        })
    })
    describe("Cart - positive scenario4: checkout", function () {
        before(function () {
            cy.fixture('store').then(function (data) {
                this.data = data
            })
        })
        it('Takes client through successfull checkout process', function () {
            const mainPage = new MainPage()
            const productPage = new ProductPage()
            const cartPage = new CartPage()
            cy.visit(Cypress.env('url'))
            cy.selectProduct(this.data.expectedProductNames[0])
            mainPage.getCartLink().click()
            cy.url().should('eq', 'https://www.demoblaze.com/cart.html')
            cy.contains(this.data.expectedProductNames[0])
            cartPage.getCheckoutButton().click()
             
            cartPage.getCheckoutName().type(this.data.cartName)
            cartPage.getCheckoutCountry().type(this.data.cartCountry)
            cartPage.getCheckoutCity().type(this.data.cartCity)
            cartPage.getCheckoutCard().type(this.data.cartCreditCard)
            cartPage.getCheckoutMonth().type(this.data.cartMonth)
            cartPage.getCheckoutYear().type(this.data.cartYear)

            cartPage.getPurchaseButton().click()
            cy.contains('Thank you for your purchase!')

        })
    })
    describe("Cart - negative scenario1: checkout with empty name", function () {
        before(function () {
            cy.fixture('store').then(function (data) {
                this.data = data
            })
        })
        it("Validates if error message is displayed when user tries to do checkout without name", function () {
            const mainPage = new MainPage()
            const cartPage = new CartPage()
            cy.visit(Cypress.env('url'))
             

            var alertCount = 0;
            cy.on('window:alert', (str) => {
                alertCount++;
                if(alertCount == 2)
                    expect(str).to.equal('Please fill out Name and Creditcard.')
            })
            cy.selectProduct(this.data.expectedProductNames[0])
            mainPage.getCartLink().click()
            cy.url().should('eq', 'https://www.demoblaze.com/cart.html')
            cy.contains(this.data.expectedProductNames[0])
            
            cartPage.getCheckoutButton().click()
             
            cartPage.getCheckoutCountry().type(this.data.cartCountry)
            cartPage.getCheckoutCity().type(this.data.cartCity)
            cartPage.getCheckoutCard().type(this.data.cartCreditCard)
            cartPage.getCheckoutMonth().type(this.data.cartMonth)
            cartPage.getCheckoutYear().type(this.data.cartYear)

            cartPage.getPurchaseButton().click()
             
         


        })
    })
