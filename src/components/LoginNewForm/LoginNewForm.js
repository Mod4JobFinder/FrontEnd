import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { color, handleModeChange } = useContext(ThemeContext);
  const [emailInput, setEmailInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [existingUser, setExistingUser] = useState('');
  const [newUser, setNewUser] = useState('hidden');

  const handleLogIn = (e) => {
    setNewUser('hidden')
    setExistingUser('')
  }

  const handleChange = (event, formType) => {
    if (formType === 'email') {
      setEmailInput(event.target.value)
    } else if (formType === 'password') {
      setPassInput(event.target.value)
    }
  }

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
      <article className='submitBox'>
        <button onClick={(e) => handleLogIn(e)}>Login</button>
        <Link to={'/NewUser'}>New User</Link>
      </article>
    </section>
  )
}

export default LoginForm
