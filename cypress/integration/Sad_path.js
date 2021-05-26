context('Sad_path', () => {

  it('A user should receive an error when they do not enter a password', () => {
    cy.stubbedInercepts()
      .get('[data-cy=email]').type('testtesttest@gmail.com')
      .get('[data-cy=loginButton]').click()
      .get('[data-cy=messages]').should('contain', 'Please enter a password and try again.')
    })

    it('A user should receive an error when they enter only a password.', () => {
      cy.stubbedInercepts()
        .get('[data-cy=password]').type('badpass')
        .get('[data-cy=loginButton]').click()
        .get('[data-cy=messages]').should('contain', 'Please enter an email and try again.')
      })


    it('A user should receive an error when they do not enter any information.', () => {
      cy.stubbedInercepts()
        .get('[data-cy=loginButton]').click()
        .get('[data-cy=messages]').should('contain', 'Please enter an email and try again.')
      })


})
