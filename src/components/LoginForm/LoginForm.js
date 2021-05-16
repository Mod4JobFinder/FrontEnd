import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const { color, handleModeChange } = useContext(ThemeContext);
  const { email, password, handleUserChange } = useContext(UserContext);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  //
  // const handleChange = (event, formType) => {
  //   if (formType === 'email') {
  //     setEmail(event.target.value)
  //   } else if (formType === 'password') {
  //     setPassword(event.target.value)
  //   }
  // }

  return (
    <section className='mainLayout'>
      <article className='login' data-cy='login'>
        <input
          className='login-input'
          name='email'
          value={email}
          onChange={event => handleUserChange(event, 'email')}
          type='text'
          aria-label='User email address'
          placeholder='User Email'
        />
        <input
          className='login-input'
          name='password'
          value={password}
          onChange={event => handleUserChange(event, 'password')}
          type='password'
          aria-label='user password input'
          placeholder='User Password'
        />
      </article>
      <article className='submitBox'>
        <button>Login</button>
        <Link to={'/NewUser'}>New User</Link>
      </article>
    </section>
  )
}

export default LoginForm
