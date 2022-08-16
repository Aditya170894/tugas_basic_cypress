import ExamplePage from "../page/ExamplePage";

//test suit
// describe('Your frist test', () => {
//     it('Verify website page', () => {
//         //visitweb
//         cy.visit('https://b899-13-67-75-93.ngrok.io/')


//         //verify label "Koligrum Web Playground"
//         cy.get('h1').should($text => {
//             expect($text).to.contain('Koligrum Web Playground')
//         });

//         //verify progress bar
//         cy.get('[role=progressbar]')
//             .should('be.visible')
//             .and($text => {
//                 expect($text).to.contain('3 / 10')
//             })

//         //verify textbox
//         cy.get('#inputQuote')
//             .should('be.visible')

//     });
// });

describe('basic cypress 2', () => {
        
    it('verify list of color', () => {
        cy.visit('/')

        //get list option
        const optionList = ["White", "Yellow", "Cyan", "Magenta", "Blue"];

        cy.get('select.form-control > option')
            .should($list => {
                //total list is 5
                expect($list).to.have.length(5)
                //verify all value
                for(let i = 0; i < $list.length; i++){
                    expect($list.eq(i)).to.contain(optionList[i]);
                }
            });
    });

    it('check input quote', () => {
        const examplePage = new ExamplePage
        cy.visit('/')

        let arrayInput = [];
        let n = 3;
        for(let i = 0; i < n; i++){
            let temp = "quote " + (i + 1);
            arrayInput.push(temp);
            
            //input quote
            examplePage.inputQuote(temp);
            //color select
            examplePage.selectColor(i);
            //click button
            examplePage.clickButton();
        }
        //verify Grid view
        cy.get('#gridView')
            .should('be.visible')

        //verify jumlah quote benar
        cy.get('.panel-body.quotes-body.quote')
            .should('have.length', n + 1);
        
        //verify quote yang dimasukkan benar
        cy.get('p[name="quoteText"]').then($listQuote => {
            for (let j =0; j < arrayInput.length; j++){
                expect($listQuote.eq(j + 1)).to.contain(arrayInput[j])
            }   
        })
        
        //verify Table view
        cy.get('#tableView')
            .click();
        
        //hover to show table
        cy.get('#buttonShowTable').trigger('mouseover')

        //verify isi tabel
        cy.get('[name="tableColumnQuote"]').then($tableQuote => {
                for (let k = 0; k < arrayInput.length; k++){
                expect($tableQuote.eq(k + 1)).to.contain(arrayInput[k])
            }
        })
    });

})