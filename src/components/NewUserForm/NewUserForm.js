import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postNewUser } from '../../apiCalls.js';


function NewUserForm() {
  const {color, handleModeChange} = useContext(ThemeContext);
  const {handleGoodLogin} = useContext(UserContext);
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
    if (password === passwordConfirmation && password.length >= 8) {
      postNewUser(user)
      .then(data => loginCheck(data))
    } else {
      return 'Password need to be 8 letters long.'
    }
  }

  const loginCheck = (user) => {
    if (user.error === 'invalid parameters') {
      clearUserForm();
      return
    } else {
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  const clearUserForm = () => {
    setFirstName('');
    setLastName('');
    setCity('');
    setState('');
    setZipcode('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }

  return(
    <section className='newUserFormLayout' data-cy='newUserFormLayout'>
        <article className='newUser'>
          <input
            data-cy='firstName'
            className='firstName'
            name='firstName'
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            type='text'
            aria-label='Input first name'
            placeholder='First Name'
          />
          <input
            data-cy='lastName'
            className='lastName'
            name='lastName'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            type='text'
            aria-label='Input last name'
            placeholder='Last Name'
          />
          <input
            data-cy='city'
            className='city'
            name='city'
            value={city}
            onChange={event => setCity(event.target.value)}
            type='text'
            aria-label='Input city'
            placeholder='City'
          />
          <input
            data-cy='state'
            className='state'
            name='state'
            value={state}
            onChange={event => setState(event.target.value)}
            type='text'
            aria-label='Input state'
            placeholder='State'
          />
          <input
            data-cy='zipcode'
            className='zipcode'
            name='zipcode'
            value={zipcode}
            onChange={event => setZipcode(event.target.value)}
            type='text'
            aria-label='Input zipcode'
            placeholder='Zipcode'
          />
          <input
            data-cy='email'
            className='email'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='text'
            aria-label='Input email'
            placeholder='Email'
          />
          <input
            data-cy='password'
            className='password'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='text'
            aria-label='Input password'
            placeholder='Password'
          />
          <input
            data-cy='passwordConfirmation'
            className='passwordConfirmation'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
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
