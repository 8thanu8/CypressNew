 it('url search checking', () => {
  const srch_txt = 'DFS'
 cy.visit('https://beta.companieshouse.gov.uk')


  cy.get('#site-search-text')
      .type(srch_txt)

         cy.get('#search-submit').click()
       // cy.get('#results')

        cy.url().should('include', 'companieshouse.gov.uk/search?q=')})