import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postSession } from '../../apiCalls.js';
import './LoginForm.css';

function LoginForm() {
  const { color, handleModeChange } = useContext(ThemeContext);
  const { email, password, handleUserChange, handleGoodLogin, clearUserForm } = useContext(UserContext);
  const history = useHistory ();

  const handleLogin = () => {
    const user = {
      "email": email,
      "password": password
    }
    postSession(user)
    .then(data => loginCheck(data))
  }

  const loginCheck = (user) => {
    console.log(user)
    if (user.error === 'invalid credentials') {
      clearUserForm()
      return
    } else {
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  return (
    <section className='mainLayout'>
      <div className='loginFormLayout'>
        <article className='loginForm' data-cy='loginForm'>
          <input
            data-cy='email'
            className='login-input'
            name='email'
            value={email}
            onChange={event => handleUserChange(event, 'email')}
            type='text'
            aria-label='User email address'
            placeholder='User Email'
          />
          <input
            data-cy='password'
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
          <button onClick={handleLogin} className='loginButton' data-cy='loginButton'>Login</button>
          <Link to={'/NewUser'} className='newUserButton' data-cy='newUserButton'>New User</Link>
        </article>
      </div>
    </section>
  )
}

export default LoginForm
// <Link to={'/JobsView'} className='loginButton' data-cy='loginButton'>Login</Link>
