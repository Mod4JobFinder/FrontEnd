Cypress.Commands.add('stubbedInercepts', () => {
  cy.stubPostNewUser();
  cy.stubPostSession();
  cy.stubGetSalary();
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('stubPostNewUser', () => {
  cy.intercept(`https://findjob-backend.herokuapp.com/api/v1/users`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'MockUserData.js' })
})

Cypress.Commands.add('stubPostSession', () => {
  cy.intercept(`https://findjob-backend.herokuapp.com/api/v1/sessions`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'MockUserData.js' })
})

Cypress.Commands.add("stubGetSalary", () => {
  cy.intercept('https://findjob-backend.herokuapp.com/api/v1/salaries?city=Chicago', {fixture: 'MockSalData.js'})
})
