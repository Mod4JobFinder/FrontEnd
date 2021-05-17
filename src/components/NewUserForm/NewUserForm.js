import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postNewUser } from '../../apiCalls.js';


function NewUserForm() {
  const {firstName, lastName, email, city, state, zipcode, password, passwordConfirmation, handleUserChange, clearUserForm, handleGoodLogin} = useContext(UserContext);
  const history = useHistory

  const handleSubmitNew = (e) => {
    const  user = {
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation,
      "first_name": firstName,
      "last_name": lastName,
      "city": city,
      "state": state,
      "zipcode": zipcode
    }
    postNewUser(user)
    .then(data => loginCheck(data))
  }

  const loginCheck = (user) => {
    if (user.error === 'invalid credentials') {
      clearUserForm()
      return
    } else {
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  return(
    <section className='newUserFormLayout' data-cy='newUserFormLayout'>
        <article className='newUser'>
          <input
            data-cy='firstName'
            className='firstName'
            name='firstName'
            value={firstName}
            onChange={event => handleUserChange(event, 'firstName')}
            type='text'
            aria-label='Input first name'
            placeholder='First Name'
          />
          <input
            data-cy='lastName'
            className='lastName'
            name='lastName'
            value={lastName}
            onChange={event => handleUserChange(event, 'lastName')}
            type='text'
            aria-label='Input last name'
            placeholder='Last Name'
          />
          <input
            data-cy='city'
            className='city'
            name='city'
            value={city}
            onChange={event => handleUserChange(event, 'city')}
            type='text'
            aria-label='Input city'
            placeholder='City'
          />
          <input
            data-cy='state'
            className='state'
            name='state'
            value={state}
            onChange={event => handleUserChange(event, 'state')}
            type='text'
            aria-label='Input state'
            placeholder='State'
          />
          <input
            data-cy='zipcode'
            className='zipcode'
            name='zipcode'
            value={zipcode}
            onChange={event => handleUserChange(event, 'zipcode')}
            type='text'
            aria-label='Input zipcode'
            placeholder='Zipcode'
          />
          <input
            data-cy='email'
            className='email'
            name='email'
            value={email}
            onChange={event => handleUserChange(event, 'email')}
            type='text'
            aria-label='Input email'
            placeholder='Email'
          />
          <input
            data-cy='password'
            className='password'
            name='password'
            value={password}
            onChange={event => handleUserChange(event, 'password')}
            type='text'
            aria-label='Input password'
            placeholder='Password'
          />
          <input
            data-cy='passwordConfirmation'
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
            <button onClick={handleSubmitNew} className='newUserSub' data-cy='newUserSub'>Submit New User</button>
        </article>
    </section>
  )
}

export default NewUserForm
// invalid parameters
