import React, { useContext } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext';

function JobsView() {
  const { color } = useContext(ThemeContext)
  return (
    <section className='jobViewLayout' data-cy='jobViewLayout'>
      <p>Test 2</p>
    </section>
  );
}

export default JobsView;
