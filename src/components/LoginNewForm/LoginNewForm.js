import React, { useState, useCont } from 'react';
import {ThemeContext} from '../../Context/ThemeContext';


function LoginForm() {
  const { color, handleModeChange } = useContext(ThemeContext)
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [newUser, setNewUser] = useState('hidden');

  const handleChange = (event, formType) => {
    if (formType === 'email') {
      setEmailInput(event.target.value)
    } else if (formType === 'password') {
      setPassInput(event.target.value)
    }
  }

  return (
    <main className={`mainLayout ${color}`}>
      <section className='login' data-cy='login'>
        <input
          className='login-input'
          name='email'
          value={emailInput}
          onChange={event => handleChange(event, 'email')}
          type='text'
          aria-label='User email address'
        />
        <input
          className='login-input'
          name='password'
          value={passInput}
          onChange={event => handleChange(event, 'password')}
          type='password'
          aria-label='user password input'
        />
      </section>
    </main>
  )
}


export default LoginForm
