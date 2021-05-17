const salaryUrl = 'https://findjob-backend.herokuapp.com/api/v1/salaries?city='
const usersUrl = 'https://findjob-backend.herokuapp.com/api/v1/users'
const loginUrl = 'https://findjob-backend.herokuapp.com/api/v1/sessions'

export const postNewUser = (newUser) => {
  return fetch(`${usersUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
}

export const postSession = (sessionInfo) => {
  return fetch(`${loginUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify(sessionInfo)
  })
  .then(response => response.json())
}

export const getSalary = (city) => {
  return fetch(`${salaryUrl}${city}`)
  .then(response => response.json())
}
