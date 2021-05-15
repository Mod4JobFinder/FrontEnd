const salary = 'https://findjob-backend.herokuapp.com/api/v1/salaries?city=denver'
const usersUrl = 'https://findjob-backend.herokuapp.com/api/v1/users'
const loginUrl = 'https://findjob-backend.herokuapp.com/api/v1/sessions'


export const postNewUser = (newUser) => {
  return fetch(usersUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
}

export const postSession = (sessionInfo) => {

}
