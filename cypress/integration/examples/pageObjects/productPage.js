class ProductPage 
{

    getAddToCartButton() 
    {
        return cy.get('.col-sm-12 > .btn')
    }

    getDeleteButton()
    {
        return cy.get('.success > :nth-child(4) > a')
    }

    









}

export default ProductPage;