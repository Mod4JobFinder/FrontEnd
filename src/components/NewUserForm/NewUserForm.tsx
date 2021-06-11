import { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext.js';
import { UserContext } from '../../Context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { postNewUser } from '../../apiCalls.js';
import './NewUserForm.css';
import { LoginCheck } from '../../interface';

function NewUserForm() {
  const {color} = useContext(ThemeContext);
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
  const [error, setError] = useState('');

  const handleSubmitNew = () => {
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
      .catch(err => console.log(err))
    } else if (password === passwordConfirmation && password.length < 8) {
      setError('Password needs to be 8 characters long.')
      return 'Password need to be 8 characters long.'
    } else if (password !== passwordConfirmation) {
      setError('Passwords do not match.')
      return
    }
  }

  const loginCheck = (user: LoginCheck) => {
    if (user.error === 'invalid parameters') {
      setError('It seems a field was missed. Please check that all forms are filled out and try again.')
      clearUserForm();
      return
    } else {
      handleGoodLogin(user.data.attributes)
      history.push('/JobsView');
    }
  }

  const clearUserForm = () => {
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <section className='newUserFormLayout' style={color.pageBackGround} data-cy='newUserFormLayout'>
        <article className='newUser' style={color.blue}>
          <p className='afr'>All fields required</p>
          <input
            data-cy='firstName'
            className='firstName lii'
            name='firstName'
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            type='text'
            aria-label='Input first name'
            placeholder='First Name'
          />
          <input
            data-cy='lastName'
            className='lastName lii'
            name='lastName'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            type='text'
            aria-label='Input last name'
            placeholder='Last Name'
          />
          <input
            data-cy='city'
            className='city lii'
            name='city'
            value={city}
            onChange={event => setCity(event.target.value)}
            type='text'
            aria-label='Input city'
            placeholder='City'
          />
          <input
            data-cy='state'
            className='state lii'
            name='state'
            value={state}
            onChange={event => setState(event.target.value)}
            type='text'
            aria-label='Input state'
            placeholder='State'
          />
          <input
            data-cy='zipcode'
            className='zipcode lii'
            name='zipcode'
            value={zipcode}
            onChange={event => setZipcode(event.target.value)}
            type='text'
            aria-label='Input zipcode'
            placeholder='Zipcode'
          />
          <input
            data-cy='email'
            className='email lii'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='text'
            aria-label='Input email'
            placeholder='Email'
          />
          <input
            data-cy='password'
            className='password lii'
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            aria-label='Input password'
            placeholder='Password'
          />
          <input
            data-cy='passwordConfirmation'
            className='passwordConfirmation lii'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
            type='password'
            aria-label='Input password confirmation'
            placeholder='Password Confirmation'
          />
          <div className='errorMsg' data-cy='message'> {error && `${error}`}</div>
        </article>
        <article className='submitBox a' style={color.blue}>
          <Link to={'/'} style={color.pink} className='returnToLogin' data-cy='returnToLogin'>Back To Login</Link>
            <button onClick={handleSubmitNew} className='newUserSub' style={color.green} data-cy='newUserSub'>Submit New User</button>
        </article>
    </section>
  )
}

export default NewUserForm
