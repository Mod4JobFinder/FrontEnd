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

    it('A user should receive an error when they do not enter any information.', () => {
      cy.sadPathTesting()
        .get('[data-cy=email]').type('testtesttest@gmail.com')
        .get('[data-cy=password]').type('badpass')
        .get('[data-cy=loginButton]').click()
        .get('[data-cy=messages]').should('contain', 'Invalid login information, please take a second look and try again.')
      })

    it('A user should receive an error message if password is too short.', () => {
      cy.sadPathTesting()
        .get('[data-cy=newUserButton]').click()
        .get('[data-cy=firstName]').type('Amie').should('have.value', 'Amie')
        .get('[data-cy=lastName]').type('Dog').should('have.value', 'Dog')
        .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
        .get('[data-cy=city]').type('Denver').should('have.value', 'Denver')
        .get('[data-cy=state]').type('CO').should('have.value', 'CO')
        .get('[data-cy=password]').type('pass')
        .get('[data-cy=passwordConfirmation]').type('pass')
        .get('[data-cy=newUserSub]').click()
        .get('[data-cy=message]').should('contain', 'Password needs to be 8 characters long')
      })

    it('A user should receive an error message if a field is not filled out.', () => {
      cy.sadPathTesting()
      cy.visit('http://localhost:3000')
        .get('[data-cy=newUserButton]').click()
        .get('[data-cy=firstName]').type('Amie').should('have.value', 'Amie')
        .get('[data-cy=lastName]').type('Dog').should('have.value', 'Dog')
        .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
        .get('[data-cy=city]').type('Denver').should('have.value', 'Denver')
        .get('[data-cy=state]').type('CO').should('have.value', 'CO')
        .get('[data-cy=password]').type('password999')
        .get('[data-cy=passwordConfirmation]').type('password999')
        .get('[data-cy=newUserSub]').click()
        .get('[data-cy=message]').should('contain', 'It seems a field was missed. Please check that all forms are filled out and try again.')
      })

      it('A user should receive an error message if password and confirmation do not match', () => {
        cy.sadPathTesting()
        cy.visit('http://localhost:3000')
          .get('[data-cy=newUserButton]').click()
          .get('[data-cy=firstName]').type('Amie').should('have.value', 'Amie')
          .get('[data-cy=lastName]').type('Dog').should('have.value', 'Dog')
          .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
          .get('[data-cy=city]').type('Denver').should('have.value', 'Denver')
          .get('[data-cy=state]').type('CO').should('have.value', 'CO')
          .get('[data-cy=password]').type('password')
          .get('[data-cy=passwordConfirmation]').type('password999')
          .get('[data-cy=newUserSub]').click()
          .get('[data-cy=message]').should('contain', 'Passwords do not match.')
        })

})
