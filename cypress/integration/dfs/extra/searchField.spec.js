 it('search field check ', () => {
  const srch_txt = 'DFS'
 cy.visit('https://beta.companieshouse.gov.uk')


  cy.get('#site-search-text')
  
      .type(srch_txt).should('have.value', srch_txt)
    
      })