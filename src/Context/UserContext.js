import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [userSavedJobs, setUserSavedJobs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

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
    setFirstName('');
    setLastName('');
    setCity('');
    setState('');
    setZipcode('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }

  const handleGoodLogin = (user) => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setCity(user.city);
    setState(user.State);
    setZipcode(user.zipcode);
    setEmail(user.email);
    setLoggedIn(true);
    setPasswordConfirmation(password);
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
      clearUserForm,
      handleGoodLogin}
     }>
      {props.children}
    </UserContext.Provider>
  )
}
