context('Job_finder', () => {

  it('When vistiting the page you should start on a login page with a header and login feild', () => {
    cy.stubbedInercepts()
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=mode]').click()
    .get('[data-cy=appTitle]').contains('Job Finder!')
    .get('[data-cy=loginForm]').should('exist')
  });

  it('The landing view should be able to login an existing user', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginForm]').should('exist')
    .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=password]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=loginButton]').click()
    .get('[data-cy=jobViewLayout]').should('exist')
  })

  it('The landing view should be able to sign up a new user', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginForm]').should('exist')
    .get('[data-cy=newUserButton]').click()
    .get('[data-cy=newUserFormLayout]').should('exist')
    .get('[data-cy=firstName]').type('Amie').should('have.value', 'Amie')
    .get('[data-cy=lastName]').type('Dog').should('have.value', 'Dog')
    .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=city]').type('Denver').should('have.value', 'Denver')
    .get('[data-cy=state]').type('CO').should('have.value', 'CO')
    .get('[data-cy=password]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=passwordConfirmation]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=newUserSub]').click()
    .get('[data-cy=jobViewLayout]').should('exist')
  })

  it('After logging in a user should be able to filter jobs by type and location, then it should show them a list of jobs and allow them to save and link to the user view', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginForm]').should('exist')
    .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=password]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=loginButton]').click()
    .get('[data-cy=jobViewLayout]').should('exist')
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=cityInput]').type('denver').should('have.value', 'denver')
    .get('[data-cy=dataAnalyst]').click()
    .get('[data-cy=searchCommit]').contains('Search for Data Analyst in denver?')
    .get('[data-cy=dataScientist]').click()
    .get('[data-cy=searchCommit]').contains('Search for Data Scientist in denver?')
    .get('[data-cy=mobileDev]').click()
    .get('[data-cy=searchCommit]').contains('Search for Mobile Developer in denver?')
    .get('[data-cy=qaEngineer]').click()
    .get('[data-cy=searchCommit]').contains('Search for QA Engineer in denver?')
    .get('[data-cy=sysAdmin]').click()
    .get('[data-cy=searchCommit]').contains('Search for Systems Administrator in denver?')
    .get('[data-cy=webDev]').click()
    .get('[data-cy=searchCommit]').contains('Search for Web Developer in denver?')
    .get('[data-cy=submitSearch]').click()
    .get('[data-cy=jobCard]').should('exist')
    .get('[data-cy=userlink]').click()
    .get('[data-cy=userView]').should('exist')
  })

  it('Should be able to link to a users page and show a list of all their save jobs with the ability to veiw details about each one.', () => {
    cy.stubbedInercepts()
    .get('[data-cy=loginForm]').should('exist')
    .get('[data-cy=email]').type('AmieDog@gmail.com').should('have.value', 'AmieDog@gmail.com')
    .get('[data-cy=password]').type('Amie123456').should('have.value', 'Amie123456')
    .get('[data-cy=loginButton]').click()
    .get('[data-cy=userlink]').click()
    .get('[data-cy=userView]').should('exist')
    .get('[data-cy=headerLayout]').should('exist')
    .get('[data-cy=savedCard]').first().click()
    .get('[data-cy=jobDetailLayout]').should('exist')

  })



})
