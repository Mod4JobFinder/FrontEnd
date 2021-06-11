import {PostJobApiCall} from './interface';


const salaryUrl = 'https://findjob-backend.herokuapp.com/api/v1/salaries?city='
const usersUrl = 'https://findjob-backend.herokuapp.com/api/v1/users'
const loginUrl = 'https://findjob-backend.herokuapp.com/api/v1/sessions'
const jobsUrl = 'https://findjob-backend.herokuapp.com/api/v1/jobs?city='
const saveUrl = 'https://findjob-backend.herokuapp.com/api/v1/saved_jobs'

export const postNewUser = (newUser: object) => {
  return fetch(`${usersUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
}

export const postSession = (sessionInfo: string) => {
  return fetch(`${loginUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify(sessionInfo)
  })
  .then(response => response.json())
}

export const getSalary = (city: string) => {
  return fetch(`${salaryUrl}${city}`)
  .then(response => response.json())
}

export const getJobs = (city: string, job: string) => {
  return fetch(`${jobsUrl}${city}&title=${job}`)
  .then(response => response.json())
}

export const postJobToUser = (userJob: PostJobApiCall) => {
  return fetch(`${saveUrl}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify(userJob)
  })
  .then(response => response.json())
}

export const deleteJobFromUser = (deleteJob: object) => {
  return fetch(`${saveUrl}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify(deleteJob)
  })
  .then(response => response.json())
}
