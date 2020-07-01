it('all', () => {
    const srch_txt = 'DFS'
    const email = 'copawoh325@etoymail.com'
    cy.visit('https://beta.companieshouse.gov.uk')
    

    // https://on.cypress.io/type
    cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)

    cy.get('#search-submit').click()
    cy.contains(srch_txt).click()
    cy.get('#user-signin').click()
    cy.get('#signin_email').type(email)
    cy.get('#password').type('Password1')
    cy.get('#submit').click()
    cy.get('#password-remaining_attempts-error').should('include.text', 'Invalid email address or password')

    cy.visit('https://beta.companieshouse.gov.uk')
   

   cy.get('#user-signin').click()
   cy.get('#signin_email').type(email)
   cy.get('#password').type('Password1!')
   cy.get('#submit').click()
   cy.get('#signed-in-user').should('include.text', email)

   cy.get('#navigation > :nth-child(2) > a').click()

   cy.url().should('include', 'account.companieshouse.gov.uk/user/account')
   cy.get('#recent_filings').click()
   cy.url().should('include', 'beta.companieshouse.gov.uk/user/transactions')
   cy.get('#following').click()

     cy.url().should('include', 'follow.companieshouse.gov.uk')


     cy.visit('https://beta.companieshouse.gov.uk')
     cy.get('#site-search-text')
      .type(srch_txt).should('have.value', srch_txt)
      cy.get('#search-submit').click()
      cy.contains(srch_txt).click()
      cy.get('#follow-this-company').click()
      cy.url().should('include', 'confirm-follow')
      cy.get('#follow-company-confirmed').click()

      
      //cy.get('#following').click() un comment when bekow done 
     

    //  cy.get('.company-header').should('include', 'unfollow')  check if there is unfollow button

    cy.get('#unfollow-this-company').click()
    cy.url().should('include', 'confirm-unfollow')
    cy.get('#unfollow-company-confirmed').click

    
    //check if has been unfollowed


}  
)
