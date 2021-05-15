import React, { useState, useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext';

function NewUserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleChange = (event, formType) => {
    if (formType === 'firstName') {
      setEmailInput(event.target.value)
    } else if (formType === 'lastName') {
      setPassInput(event.target.value)
    } else if (formType === 'city') {
      setFirstName(event.target.value)
    } else if (formType === 'state') {
      setFirstName(event.target.value)
    } else if (formType === 'zipcode') {
      setFirstName(event.target.value)
    } else if (formType === 'email') {
      setFirstName(event.target.value)
    } else if (formType === 'password') {
      setFirstName(event.target.value)
    } else if (formType === 'passwordConfirmation') {
      setFirstName(event.target.value)
    }
  }

  return(
    <section>
      <article className={`newUser ${newUser}`}>
        <input
          className='firstName'
          name='firstName'
          value={firstName}
          onChange={event => handleChange(event, 'firstName')}
          type='text'
          aria-label='Input first name'
          placeholder='First Name'
        />
        <input
          className='lastName'
          name='lastName'
          value={lastName}
          onChange={event => handleChange(event, 'lastName')}
          type='text'
          aria-label='Input last name'
          placeholder='Last Name'
        />
        <input
          className='city'
          name='city'
          value={city}
          onChange={event => handleChange(event, 'city')}
          type='text'
          aria-label='Input city'
          placeholder='City'
        />
        <input
          className='state'
          name='state'
          value={state}
          onChange={event => handleChange(event, 'state')}
          type='text'
          aria-label='Input state'
          placeholder='State'
        />
        <input
          className='zipcode'
          name='zipcode'
          value={zipcode}
          onChange={event => handleChange(event, 'zipcode')}
          type='text'
          aria-label='Input zipcode'
          placeholder='Zipcode'
        />
        <input
          className='email'
          name='email'
          value={email}
          onChange={event => handleChange(event, 'email')}
          type='text'
          aria-label='Input email'
          placeholder='Email'
        />
        <input
          className='password'
          name='password'
          value={password}
          onChange={event => handleChange(event, 'password')}
          type='text'
          aria-label='Input password'
          placeholder='Password'
        />
        <input
          className='passwordConfirmation'
          name='passwordConfirmation'
          value={passwordConfirmation}
          onChange={event => handleChange(event, 'passwordConfirmation')}
          type='text'
          aria-label='Input password confirmation'
          placeholder='Password Confirmation'
        />
      </article>
      <article className='submitBox'>
        <button>Back To Login</button>
        <button>Submit New User</button>
      </article>
    </section>
  )
}

export default NewUserForm
