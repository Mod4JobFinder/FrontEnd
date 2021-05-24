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

  const handleLogin = () => {
    const user = {
      "email": email,
      "password": password
    }
    if (password.length >= 8) {
      postSession(user)
      .then(data => loginCheck(data))
      .catch(err => console.log(err))
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
