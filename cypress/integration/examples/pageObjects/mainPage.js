class MainPage

{
    getLogin() {
        return cy.get('#login2')
    }
    getSignup() {
        return cy.get('#signin2')
    }
    getSignUsername() {
        return cy.get('#sign-username')
    }
    getSignPassword() {
        return cy.get('#sign-password')
    }
    getSignUpButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }
    getCancelSignUpButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
    getLogin() {
        return cy.get('#login2')
    }
    getLoginUsername() {
        return cy.get('#loginusername')
    }
    getLoginPassword() {
        return cy.get('#loginpassword')
    }
    getLoginButton() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')

    }
    getLogOut() {
        return cy.get('#logout2')

    }
    getCancelLogin() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
    getCartLink() {
        return cy.get('#cartur')
    }
    getContactLink() {
        return cy.get(':nth-child(2) > .nav-link')
    }
    getContactClose() {
        return cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
    getAboutUsButton() {
        return cy.get(':nth-child(3) > .nav-link')
    }

}
export default MainPage;