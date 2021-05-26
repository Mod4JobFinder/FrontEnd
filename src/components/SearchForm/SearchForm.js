import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import cityData from '../../cityData.js'
import './SearchForm.css';

function SearchForm({ userCity, updataSearchedJobs, handleUpdateSalaries, setError, error }) {
  const { color } = useContext(ThemeContext);
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle] = useState('');

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

  const formatCity = () => {
    let cityToCheck = '';
    if(!city) {
      cityToCheck = userCity
    } else {
      cityToCheck = city
    }
    const cityLower = cityToCheck.toLowerCase();
    const cityNoSpaces = cityLower.split(' ').join('');
    const cityChecked = cityData.find(city => city === cityNoSpaces)
    return cityChecked;
  }

  const handleSubmitSearch = () => {
    const cityChecked = formatCity()
    if (!jobTitle) {
      setError('Please select a job title.')
      errorTimeout(4000)
      return
    } else if (cityChecked === undefined) {
      setError('City not on file please try a larger cith in your area.')
      errorTimeout(4000)
      return
    } else {
      updataSearchedJobs(cityChecked, jobTitle);
    }
  }

  const errorTimeout = (time) => {
    window.setTimeout(function() {
      setError('')
    }, time);
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
      <div className='errorMsg'> {error && `${error}`}</div>
    </section>
  )
}

export default SearchForm
