import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './SearchForm.css';

function SearchForm() {
  const { color } = useContext(ThemeContext)
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle]= useState('');

  return (
    <section>
      <article className='jobFilter' data-cy='jobFilter'>
        <button className='dataAnalyst' data-cy='dataAnalyst'>Data Analyst</button>
        <button className='dataScientist' data-cy='dataScientist'>Data Scientist</button>
        <button className='mobileDev' data-cy='mobileDev'>Mobile Developer</button>
        <button className='qaEngineer' data-cy='qaEngineer'>QA Engineer</button>
        <button className='sysAdmin' data-cy='sysAdmin'>Systems Admin</button>
        <button className='webDev' data-cy='webDev'>Web Developer</button>
      </article>
      <article>
        <input
          data-cy='city'
          className='cityInput'
          name='city'
          value={city}
          type='text'
          aria-label='city to search'
          placeholder='City'
        />
      </article>
    </section>
  )
}

export default SearchForm
