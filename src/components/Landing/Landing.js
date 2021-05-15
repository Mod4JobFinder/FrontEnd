import React, { useState } from 'react';
import './Landing.css';
import Header from '../Header/Header.js';
import ThemeContext from '../ThemeContext';

function Landing() {
  const [color, setColor] = useState('dark')
  return (
    <ThemeContext.Provider value={{color, setColor}}>
     <Header />
     <p>test</p>
    </ThemeContext.Provider>
  );
}

export default Landing;
