 it('.type() - type into a DOM element', () => {
  const srch_txt = 'DFS'
 cy.visit('https://beta.companieshouse.gov.uk')


  cy.get('#site-search-text')
      .type(srch_txt)

         cy.get('#search-submit').click()
       // cy.get('#results')


         cy.contains(srch_txt).click()
           cy.get('#sic-title')
           cy.get('#content-container').contains('furniture')
})