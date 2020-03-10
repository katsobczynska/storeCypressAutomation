class CartPage {

    getCheckoutButton() {
        return cy.get('.col-lg-1 > .btn')
    }
    getPurchaseButton() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
    getCancelCheckout() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }

    getPurchaseButton() {
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    getCheckoutName() {
        return cy.get('#name')
    }

    getCheckoutCountry() {
        return cy.get('#country')
    }
    getCheckoutCity() {
        return cy.get('#city')
    }
    getCheckoutCard() {
        return cy.get('#card')
    }

    getCheckoutMonth() {
        return cy.get('#month')
    }
    getCheckoutYear() {
        return cy.get('#year')
    }
}

export default CartPage;