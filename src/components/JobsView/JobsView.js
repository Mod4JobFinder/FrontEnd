import React, { useContext } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext';
import Header from '../Header/Header.js'

function JobsView() {
  const { color } = useContext(ThemeContext)
  return (
    <section className='jobViewLayout' data-cy='jobViewLayout'>
      <Header />
      <p>Test 2</p>
    </section>
  );
}

export default JobsView;
