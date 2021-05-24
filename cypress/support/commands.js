Cypress.Commands.add('stubbedInercepts', () => {
  cy.stubPostNewUser();
  cy.stubPostSession();
  cy.stubGetSalary();
  cy.stubGetJobs();
  cy.stubPostJobToUser();
  cy.visit('http://localhost:3000/')
})

Cypress.Commands.add('stubPostNewUser', () => {
  cy.intercept(`https://findjob-backend.herokuapp.com/api/v1/users`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture:'MockUserData.js' })
})

Cypress.Commands.add('stubPostSession', () => {
  cy.intercept(`https://findjob-backend.herokuapp.com/api/v1/sessions`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture:'MockUserData.js' })
})

Cypress.Commands.add('stubGetSalary', () => {
  cy.intercept('https://findjob-backend.herokuapp.com/api/v1/salaries?city=denver',
   {fixture:'MockSalData.js'})
})

Cypress.Commands.add('stubGetJobs', () => {
  cy.intercept('https://findjob-backend.herokuapp.com/api/v1/jobs?city=denver&title=Web%20Developer', {fixture:'MockJobListData.js'})
})



Cypress.Commands.add('stubPostJobToUser', () => {
  cy.intercept(`https://findjob-backend.herokuapp.com/api/v1/saved_jobs`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture:'MockUserData.js' })
})
