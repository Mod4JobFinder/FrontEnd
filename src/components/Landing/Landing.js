import React, {useContext } from 'react';
import './Landing.css';
import Header from '../Header/Header.tsx';
import LoginForm from '../LoginForm/LoginForm.js';
import {ThemeContext} from '../../Context/ThemeContext.tsx';

function Landing() {
  const { color } = useContext(ThemeContext)

  return (
    <main className={`LandingLayout ${color}`} style={color.pageBackGround}>
      <Header hidden={'hidden'}/>
      <LoginForm />
    </main>
  );
}

export default Landing;
