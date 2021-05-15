import React, { useState } from 'react';

function LoginForm() {
  const [emailInput, setEmailInput] = useState('')
  const [passInput, setPassInput] = useState('')

  const handleChange = (event, formType) => {
    if (formType === 'email') {
      setEmailInput(event.target.value)
    } else if (formType === 'password') {
      setPassInput(event.target.value)
    }
  }

  return (
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
  )
}
