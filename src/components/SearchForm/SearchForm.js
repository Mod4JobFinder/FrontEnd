import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './SearchForm.css';

function SearchForm() {
  const { color } = useContext(ThemeContext)
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle]= useState('');

  const handleJobButton = (e, job) => {
    if (job === jobTitle) {
      setJobTitle('');
    } else {
      setJobTitle(job);
    }
  }

  const clearSearch = () => {
    setJobTitle('');
    setCity('');
  }

  return (
    <section>
      <p>{`Looking for ${jobTitle} in ${city}.`}</p>
      <article className='jobFilter' data-cy='jobFilter'>
        <button className='dataAnalyst' data-cy='dataAnalyst' onClick={e => handleJobButton(e, 'Data Analyst')}>Data Analyst</button>
        <button className='dataScientist' data-cy='dataScientist' onClick={e => handleJobButton(e, 'Data Scientist')}>Data Scientist</button>
        <button className='mobileDev' data-cy='mobileDev' onClick={e => handleJobButton(e, 'Mobile Developer')}>Mobile Developer</button>
        <button className='qaEngineer' data-cy='qaEngineer' onClick={e => handleJobButton(e, 'QA Engineer')}>QA Engineer</button>
        <button className='sysAdmin' data-cy='sysAdmin' onClick={e => handleJobButton(e, 'Systems Administrator')}>Systems Admin</button>
        <button className='webDev' data-cy='webDev' onClick={e => handleJobButton(e, 'Web Developer')}>Web Developer</button>
      </article>
      <article>
        <input
          data-cy='city'
          className='cityInput'
          name='city'
          value={city}
          onChange={event => setCity(event.target.value)}
          type='text'
          aria-label='city to search'
          placeholder='City'
        />
        <button className='submitSearch' data-cy='submitSearch'>Submit</button>
        <button className='clearSearch' data-cy='clearSearch' onClick={clearSearch}>Clear Search</button>
      </article>
    </section>
  )
}

export default SearchForm
