import React, { useState, useEffect, useContext } from 'react';
import {ThemeContext} from '../ThemeContext';

function Header() {
  const { color, handleModeChange } = useContext(ThemeContext)

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
