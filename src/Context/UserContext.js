import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
<<<<<<< HEAD
  const [currentUser, setCurrentUser] = useState({});
  const [userSavedJobs, setUserSavedJobs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGoodLogin = (user) => {
    setCurrentUser(user)
    setLoggedIn(true);
  }

  return (
    <UserContext.Provider value={{currentUser,userSavedJobs,loggedIn,handleGoodLogin}}>
=======
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [userSavedJobs, setUserSavedJobs] = useState([]);

  const handleUserChange = (event, formType) => {
    if (formType === 'firstName') {
      setFirstName(event.target.value)
    } else if (formType === 'lastName') {
      setLastName(event.target.value)
    } else if (formType === 'city') {
      setCity(event.target.value)
    } else if (formType === 'state') {
      setState(event.target.value)
    } else if (formType === 'zipcode') {
      setZipcode(event.target.value)
    } else if (formType === 'email') {
      setEmail(event.target.value)
    } else if (formType === 'password') {
      setPassword(event.target.value)
    } else if (formType === 'passwordConfirmation') {
      setPasswordConfirmation(event.target.value)
    }
  }

  const clearUserForm = () => {
    setFirstName('')
    setLastName('')
    setCity('')
    setState('')
    setZipcode('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <UserContext.Provider value={
      {firstName,
      lastName,
      email,
      city,
      state,
      zipcode,
      password,
      passwordConfirmation,
      userSavedJobs,
      handleUserChange,
      clearUserForm}
     }>
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
      {props.children}
    </UserContext.Provider>
  )
}
