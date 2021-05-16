import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import { postNewUser } from '../../apiCalls.js';

function NewUserForm() {
  const { firstName, lastName, email, city, state, zipcode, password, passwordConfirmation, handleUserChange, clearUserForm} = useContext(ThemeContext)
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  //
  // const handleChange = (event, formType) => {
  //   if (formType === 'firstName') {
  //     setFirstName(event.target.value)
  //   } else if (formType === 'lastName') {
  //     setLastName(event.target.value)
  //   } else if (formType === 'city') {
  //     setCity(event.target.value)
  //   } else if (formType === 'state') {
  //     setState(event.target.value)
  //   } else if (formType === 'zipcode') {
  //     setZipcode(event.target.value)
  //   } else if (formType === 'email') {
  //     setEmail(event.target.value)
  //   } else if (formType === 'password') {
  //     setPassword(event.target.value)
  //   } else if (formType === 'passwordConfirmation') {
  //     setPasswordConfirmation(event.target.value)
  //   }
  // }

  const handleSubmitNew = (e) => {
    const  test = {
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation,
      "first_name": firstName,
      "last_name": lastName,
      "city": city,
      "state": state,
      "zipcode": zipcode
    }
    postNewUser(test)
    .then(data => console.log(data))
    clearUserForm()
  }

  // const clearForm = () => {
  //     setFirstName('')
  //     setLastName('')
  //     setCity('')
  //     setState('')
  //     setZipcode('')
  //     setEmail('')
  //     setPassword('')
  //     setPasswordConfirmation('')
  // }

  return(
    <section className='mainLayout'>
        <article className='newUser'>
          <input
            className='firstName'
            name='firstName'
            value={firstName}
            onChange={event => handleUserChange(event, 'firstName')}
            type='text'
            aria-label='Input first name'
            placeholder='First Name'
          />
          <input
            className='lastName'
            name='lastName'
            value={lastName}
            onChange={event => handleUserChange(event, 'lastName')}
            type='text'
            aria-label='Input last name'
            placeholder='Last Name'
          />
          <input
            className='city'
            name='city'
            value={city}
            onChange={event => handleUserChange(event, 'city')}
            type='text'
            aria-label='Input city'
            placeholder='City'
          />
          <input
            className='state'
            name='state'
            value={state}
            onChange={event => handleUserChange(event, 'state')}
            type='text'
            aria-label='Input state'
            placeholder='State'
          />
          <input
            className='zipcode'
            name='zipcode'
            value={zipcode}
            onChange={event => handleUserChange(event, 'zipcode')}
            type='text'
            aria-label='Input zipcode'
            placeholder='Zipcode'
          />
          <input
            className='email'
            name='email'
            value={email}
            onChange={event => handleUserChange(event, 'email')}
            type='text'
            aria-label='Input email'
            placeholder='Email'
          />
          <input
            className='password'
            name='password'
            value={password}
            onChange={event => handleUserChange(event, 'password')}
            type='text'
            aria-label='Input password'
            placeholder='Password'
          />
          <input
            className='passwordConfirmation'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={event => handleUserChange(event, 'passwordConfirmation')}
            type='text'
            aria-label='Input password confirmation'
            placeholder='Password Confirmation'
          />
        </article>
        <article className='submitBox'>
          <Link to={'/'}>Back To Login</Link>
          <button onClick={() => handleSubmitNew()}>Submit New User</button>
        </article>
    </section>
  )
}

export default NewUserForm
