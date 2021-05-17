import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
<<<<<<< HEAD
import { Link, useHistory } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
import { postNewUser } from '../../apiCalls.js';


function NewUserForm() {
<<<<<<< HEAD
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
=======
  const {firstName, lastName, email, city, state, zipcode, password, passwordConfirmation, handleUserChange, clearUserForm} = useContext(UserContext);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // const handleChange = (event, formType) => {
  //   if (formType === 'firstName') {
  //     setFirstName(event.target.value)
  //   } else if (formType === 'lastName') {
  //     setLastName(event.target.value)
  //   } else if (formType === 'city') {
  //     setCity(event.target.value)
  //   } else if (formType === 'state') {
  //     setState(event.target.value)
  //   } else if (formType === 'zipcode') {
  //     setZipcode(event.target.value)
  //   } else if (formType === 'email') {
  //     setEmail(event.target.value)
  //   } else if (formType === 'password') {
  //     setPassword(event.target.value)
  //   } else if (formType === 'passwordConfirmation') {
  //     setPasswordConfirmation(event.target.value)
  //   }
  // }

  const handleSubmitNew = (e) => {
    const  test = {
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation,
      "first_name": firstName,
      "last_name": lastName,
      "city": city,
      "state": state,
      "zipcode": zipcode
    }
<<<<<<< HEAD
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
=======
    postNewUser(test)
    .then(data => console.log(data))
    clearUserForm()
  }

  // const clearForm = () => {
  //     setFirstName('')
  //     setLastName('')
  //     setCity('')
  //     setState('')
  //     setZipcode('')
  //     setEmail('')
  //     setPassword('')
  //     setPasswordConfirmation('')
  // }
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a

  return(
    <section className='newUserFormLayout' data-cy='newUserFormLayout'>
        <article className='newUser'>
          <input
            data-cy='firstName'
            className='firstName'
            name='firstName'
            value={firstName}
<<<<<<< HEAD
            onChange={event => setFirstName(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'firstName')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input first name'
            placeholder='First Name'
          />
          <input
            data-cy='lastName'
            className='lastName'
            name='lastName'
            value={lastName}
<<<<<<< HEAD
            onChange={event => setLastName(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'lastName')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input last name'
            placeholder='Last Name'
          />
          <input
            data-cy='city'
            className='city'
            name='city'
            value={city}
<<<<<<< HEAD
            onChange={event => setCity(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'city')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input city'
            placeholder='City'
          />
          <input
            data-cy='state'
            className='state'
            name='state'
            value={state}
<<<<<<< HEAD
            onChange={event => setState(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'state')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input state'
            placeholder='State'
          />
          <input
            data-cy='zipcode'
            className='zipcode'
            name='zipcode'
            value={zipcode}
<<<<<<< HEAD
            onChange={event => setZipcode(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'zipcode')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input zipcode'
            placeholder='Zipcode'
          />
          <input
            data-cy='email'
            className='email'
            name='email'
            value={email}
<<<<<<< HEAD
            onChange={event => setEmail(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'email')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input email'
            placeholder='Email'
          />
          <input
            data-cy='password'
            className='password'
            name='password'
            value={password}
<<<<<<< HEAD
            onChange={event => setPassword(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'password')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input password'
            placeholder='Password'
          />
          <input
            data-cy='passwordConfirmation'
            className='passwordConfirmation'
            name='passwordConfirmation'
            value={passwordConfirmation}
<<<<<<< HEAD
            onChange={event => setPasswordConfirmation(event.target.value)}
=======
            onChange={event => handleUserChange(event, 'passwordConfirmation')}
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
            type='text'
            aria-label='Input password confirmation'
            placeholder='Password Confirmation'
          />
        </article>
        <article className='submitBox'>
          <Link to={'/'}>Back To Login</Link>
<<<<<<< HEAD
            <button onClick={handleSubmitNew} className='newUserSub' data-cy='newUserSub'>Submit New User</button>
=======
          <Link to={'/JobsView'} onClick={() => handleSubmitNew()} className='newUserSub' data-cy='newUserSub'>Submit New User</Link>
>>>>>>> 3e35c925546ec7da9f7ada4391020a72f3a0af4a
        </article>
    </section>
  )
}

export default NewUserForm
