import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../Context/ThemeContext';
import './Header.css';

function Header( {hidden} ) {
  const { color, handleModeChange } = useContext(ThemeContext)

  return (
    <section className='headerLayout' style={color.blue} data-cy='headerLayout'>
      <button onClick={e => handleModeChange(e)} className='mode' data-cy='mode'>mode</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy='appTitle'>Job Finder!</h1>
      </article>
      <article className='rightHeaderButtons'>
        <Link to={'/UserView'} className={`userlink ${hidden}`} style={color.orange} data-cy='userlink'>User Saved</Link>
        <button className='hidden'>Compare</button>
      </article>
    </section>
  )
}

export default Header;
