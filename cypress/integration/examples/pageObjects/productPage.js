class ProductPage {
    //Individual product page

    getAddToCartButton() {
        return cy.get('.col-sm-12 > .btn')
    }

    getDeleteButton() {
        return cy.get('.success > :nth-child(4) > a')
    }

    getItemName() {
        return cy.get('.name')
    }

    getItemPrice() {
        return cy.get('.price-container')
    }

    getItemInformation() {
        return cy.get('#more-information')
    }

    getItemImage() {
        return cy.get('.product-image')
    }


    //All products

    getProductBlock() {
        return cy.get('.card-block')

    }

    getProductTitle() {
        return cy.get('.card-title')

    }

    getProductText() {
        return cy.get('.card-text')

    }

    getProductImage() {
        return cy.get('.card-img-top')

    }
}
export default ProductPage;