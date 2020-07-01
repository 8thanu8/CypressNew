 it('checkbox being unchecked', () => {
  const srch_txt = 'DFS'
 cy.visit('https://beta.companieshouse.gov.uk')


  cy.get('#site-search-text')
      .type(srch_txt)

         cy.get('#search-submit').click()
       // cy.get('#results')


         cy.contains(srch_txt).click()

   cy.contains('People').click()

     cy.get('.block-label [type="checkbox"]')
         .not('[disabled]')
         .uncheck().should('not.be.checked')


         })