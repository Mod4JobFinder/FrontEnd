import React, { useState, useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext';

function LoginForm() {
  const { color, handleModeChange } = useContext(ThemeContext);
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [existingUser, setExistingUser] = useState('');
  const [newUser, setNewUser] = useState('hidden');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleNewUser = (e) => {
    setNewUser('')
    setExistingUser('hidden')
  }

  const handleLogIn = (e) => {
    setNewUser('hidden')
    setExistingUser('')
  }

  const handleChange = (event, formType) => {
    console.log(event)
    if (formType === 'email') {
      setEmailInput(event.target.value)
    } else if (formType === 'password') {
      setPassInput(event.target.value)
    } else if (formType === 'firstName') {
      setFirstName(event.target.value)
    }
  }

  // {
  //     'first_name': string,
  //     'last_name': string,
  //     'email': string,
  //     'city': string,
  //     'state': string (initial),
  //     'zipcode': string,
  //     'password': string,
  //     'password_confirmation': string
  //  }

  return (
    <section className={`mainLayout ${color}`}>
      <article className={`login ${existingUser}`} data-cy='login'>
        <input
          className='login-input'
          name='email'
          value={emailInput}
          onChange={event => handleChange(event, 'email')}
          type='text'
          aria-label='User email address'
          placeholder='User Email'
        />
        <input
          className='login-input'
          name='password'
          value={passInput}
          onChange={event => handleChange(event, 'password')}
          type='password'
          aria-label='user password input'
          placeholder='User Password'
        />
      </article>
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
        <button onClick={(e) => handleLogIn(e)}>Login</button>
        <button className={`${existingUser}`}onClick={(e) => handleNewUser(e)}>New User</button>
      </article>
    </section>
  )
}

export default LoginForm
