const salary = 'https://findjob-backend.herokuapp.com/api/v1/salaries?city=denver'
const usersUrl = 'https://findjob-backend.herokuapp.com/api/v1/users'
const loginUrl = 'https://findjob-backend.herokuapp.com/api/v1/sessions'

export const postNewUser = (newUser) => {
  return fetch(usersUrl), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.string(newUser)
  })
  .then(response => response.json())
}
