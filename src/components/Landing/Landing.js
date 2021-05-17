import React, {useContext } from 'react';
import './Landing.css';
import Header from '../Header/Header.js';
import LoginForm from '../LoginForm/LoginForm.js';
import {ThemeContext} from '../../Context/ThemeContext';

function Landing() {
  const { color } = useContext(ThemeContext)

  return (
    <main className={`LandingLayout ${color}`}>
      <Header />
      <LoginForm />
    </main>
  );
}

export default Landing;
