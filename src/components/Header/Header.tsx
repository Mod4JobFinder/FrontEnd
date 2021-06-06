import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ThemeContext} from '../../Context/ThemeContext.js';
import './Header.css';
import {Hidden} from '../../interface'

const Header: React.FC<Hidden> = ({hidden}): JSX.Element => {
  const { color, handleModeChange } = useContext(ThemeContext);

  return (
    <section className='headerLayout' style={color.blue} data-cy='headerLayout'>
      <button onClick={e => handleModeChange(e)} className='mode' style={color.orange} data-cy='mode'>&#9788;</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy='appTitle'>Job Finder!</h1>
      </article>
      <article className='rightHeaderButtons'>
        <Link to={'/UserView'} className={`userlink u ${hidden}`} style={color.orange} data-cy='userlink'>User</Link>
        <Link to={'/JobsView'} className={`userlink h ${hidden}`} style={color.orange} data-cy='homelink'>Home</Link>
      </article>
    </section>
  )
}

export default Header;
