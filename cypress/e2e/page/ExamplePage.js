class ExamplePage {
    inputQuote(quote){
        cy.get('#inputQuote')
            .type(quote);
    }

    selectColor(option){
        cy.get('#colorSelect')
            .select(option);          
    }

    clickButton(){
        cy.get('#buttonAddQuote')
            .click();
    }
}

export default ExamplePage