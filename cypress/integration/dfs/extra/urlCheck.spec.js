 it('.type() - type into a DOM element', () => {
     cy.visit('https://beta.companieshouse.gov.uk')

cy.url().as('url');


 cy.get('@url').should('include', 'https://beta.companieshouse.gov.uk')
})