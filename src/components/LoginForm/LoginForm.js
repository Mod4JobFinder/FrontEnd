import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postSession } from '../../apiCalls.js';
import './LoginForm.css';

function LoginForm() {
  const {color} = useContext(ThemeContext);
  const {handleGoodLogin} = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = {
      "email": email,
      "password": password
    }
    if (!email) {
      setError('Please enter an email and try again.')
      errorTimeout(4000)
    } else if (password) {
      postSession(user)
      .then(data => loginCheck(data))
      .catch(err => console.log(err))
    } else {
      setError('Please enter a password and try again.')
      errorTimeout(4000)
      return 'Invalid password.'
    }
  }

  const loginCheck = (user) => {
    if (user.error === 'invalid parameters') {
      setError('Invalid login information, please take a second look and try again.');
      errorTimeout(4000);
      setPassword('');
      return
    } else {
      //loading message
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  const errorTimeout = (time) => {
    window.setTimeout(function() {
      setError('')
    }, time);
  }

  return (
    <section className='mainLayout'>
      <div className='loginFormLayout'>
        <article className='loginForm' style={color.blue} data-cy='loginForm'>
          <input
            data-cy='email'
            className='login-input'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='text'
            aria-label='User email address'
            placeholder='User Email'
          />
          <input
            data-cy='password'
            className='login-input'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            aria-label='user password input'
            placeholder='User Password'
          />
          <div className='errorMsg'> {error && `${error}`}</div>
        </article>
        <article className='submitBox' style={color.blue}>
          <button onClick={handleLogin} className='loginButton' style={color.orange} data-cy='loginButton'>Login!</button>
          <Link to={'/NewUser'} className='newUserButton' style={color.pink} data-cy='newUserButton'>New User?</Link>
        </article>
      </div>
    </section>
  )
}

export default LoginForm
