import React, { useState, useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import './Header.css';

function Header() {
  const { color, handleModeChange } = useContext(ThemeContext)

  return (
    <section className={`headerLayout ${color}`} data-cy='headerLayout'>
      <button onClick={e => handleModeChange(e)} className='mode' data-cy='mode'>{`mode`}</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy='appTitle'>Job Finder!</h1>
      </article>
      <article className='rightHeaderButtons'>
        <button className='hidden'>User Saved</button>
        <button className='hidden'>Compare</button>
      </article>
    </section>
  )
}

export default Header;
