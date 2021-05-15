import React, { useState } from 'react';
import './Landing.css';
import Header from '../Header/Header.js';
import LoginForm from '../LoginNewForm/LoginNewForm.js';


function Landing() {
  return (
    <main className='LandingLayout'>
      <Header />
      <LoginForm />
    </main>
  );
}

export default Landing;
