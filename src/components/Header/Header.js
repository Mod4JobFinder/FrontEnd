import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from '../ThemeContext';

function Header() {
  const { color, setColor } = useContext(ThemeContext)
  // console.log(value);

  // const [mode, setMode] = useState('light');
  const handleModeChange = (e) => {
    if (color === 'light') {
      setColor('dark');
    } else {
      setColor('light');
    }
  }

  return (
    <section className='headerLayout' data-cy='headerLayout'>
      <button onClick={e => handleModeChange(e)} className='mode' data-cy='mode'>mode</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy='appTitle'>Job Finder!</h1>
      </article>
      <p>{color}</p>
    </section>
  )
}

export default Header;
