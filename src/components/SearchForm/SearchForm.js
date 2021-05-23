import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './SearchForm.css';

function SearchForm({ userCity, updataSearchedJobs, handleUpdateSalaries }) {
  const { color } = useContext(ThemeContext)
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle]= useState('');

  const handleJobButton = (job) => {
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

  const handleSubmitSearch = () => {
    if (!jobTitle) {
      return
    }
    else if (!city) {
      updataSearchedJobs(userCity, jobTitle);
    } else {
      updataSearchedJobs(city, jobTitle);
    }
  }

  return (
    <section>
      <p className='searchCommit' data-cy='searchCommit'>{`Search for ${jobTitle || 'your desired job'} in ${city || 'your city'}?`}</p>
      <article className='jobFilter' data-cy='jobFilter'>
        <button className='filtBut dataAnalyst' style={color.orange} data-cy='dataAnalyst' onClick={e => handleJobButton('Data Analyst')}>Data Analyst</button>
        <button className='filtBut dataScientist' style={color.orange} data-cy='dataScientist' onClick={e => handleJobButton('Data Scientist')}>Data Scientist</button>
        <button className='filtBut mobileDev' style={color.orange} data-cy='mobileDev' onClick={e => handleJobButton('Mobile Developer')}>Mobile Developer</button>
        <button className='filtBut qaEngineer' style={color.orange} data-cy='qaEngineer' onClick={e => handleJobButton('QA Engineer')}>QA Engineer</button>
        <button className='filtBut sysAdmin' style={color.orange} data-cy='sysAdmin' onClick={e => handleJobButton('Systems Administrator')}>Systems Admin</button>
        <button className='filtBut webDev' style={color.orange} data-cy='webDev' onClick={e => handleJobButton('Web Developer')}>Web Developer</button>
      </article>
      <article className='searchBar'>
        <input
          data-cy='cityInput'
          className='sb cityInput'
          name='city'
          value={city}
          onChange={event => setCity(event.target.value)}
          type='text'
          aria-label='city to search'
          placeholder='City'
        />
        <button className='sb submitSearch' style={color.green} data-cy='submitSearch' onClick={handleSubmitSearch}>Submit</button>
        <button className='sb clearSearch' style={color.pink} data-cy='clearSearch' onClick={clearSearch}>Clear Search</button>
      </article>
    </section>
  )
}

export default SearchForm
