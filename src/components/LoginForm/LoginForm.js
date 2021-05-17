<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postSession } from '../../apiCalls.js';
import './LoginForm.css';

function LoginForm() {
  const {color, handleModeChange} = useContext(ThemeContext);
  const {handleGoodLogin} = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = {
      "email": email,
      "password": password
    }
    if (password.length >= 8) {
      postSession(user)
      .then(data => loginCheck(data))
    } else {
      return 'Invalid password.'
    }
  }

  const loginCheck = (user) => {
    if (user.error === 'invalid parameters') {
      clearSessionForm ();
      return
    } else {
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  const clearSessionForm = () => {
    setEmail('');
    setPassword('');
  }
=======
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

  // const handleChange = (event, formType) => {
  //   if (formType === 'email') {
  //     setEmail(event.target.value)
  //   } else if (formType === 'password') {
  //     setPassword(event.target.value)
  //   }
  // }

  const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a

  return (
    <section className='mainLayout'>
      <div className='loginFormLayout'>
        <article className='loginForm' data-cy='loginForm'>
          <input
            data-cy='email'
            className='login-input'
            name='email'
            value={email}
<<<<<<< HEAD
            onChange={event => setEmail(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'email')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='User email address'
            placeholder='User Email'
          />
          <input
            data-cy='password'
            className='login-input'
            name='password'
            value={password}
<<<<<<< HEAD
            onChange={event => setPassword(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'password')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='password'
            aria-label='user password input'
            placeholder='User Password'
          />
        </article>
        <article className='submitBox'>
<<<<<<< HEAD
          <button onClick={handleLogin} className='loginButton' data-cy='loginButton'>Login</button>
=======
          <Link to={'/JobsView'} className='loginButton' data-cy='loginButton'>Login</Link>
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
          <Link to={'/NewUser'} className='newUserButton' data-cy='newUserButton'>New User</Link>
        </article>
      </div>
    </section>
  )
}

export default LoginForm
