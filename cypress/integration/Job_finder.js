context('Job_finder', () => {

  it('When vistiting the page you should start on a login page with a header and login feild', () => {
    cy.stubbedInercepts()
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=mode]').click()
    .get('[data-cy=appTitle]').contains('Job Finder!')
    .get('[data-cy=loginFormLayout]').should('exist')
  });

  it('The landing view should be able to sign up a new user', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginFormLayout]').should('exist')
    .get('[data-cy=newUserButton]').click()
    .get('[data-cy=firstName]').type('Amie').should('have.value', 'Amie')
    .get('[data-cy=lastName]').type('Dog').should('have.value', 'Dog')
    .get('[data-cy=newEmail]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=city]').type('Chicago').should('have.value', 'Chicago')
    .get('[data-cy=state]').type('CO').should('have.value', 'Amie')
    .get('[data-cy=newPassword]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=newPasswordConfirmation]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=submit]').click()
    .get('[data-cy=jobViewLayout]').should('exist');
  })

  it('The landing view should be able to login an existing user', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginFormLayout]').should('exist')
    .get('[data-cy=userName]').type('Amie').should('have.value', 'Amie')
    .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=password]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=submit]').click()
    .get('[data-cy=jobViewLayout]').should('exist');
  })


})
