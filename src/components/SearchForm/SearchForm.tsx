import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext.js';
import cityData from '../../cityData.js'
import './SearchForm.css';
import {SearchTypes} from '../../interface';

const SearchForm: React.FC<SearchTypes> = ({ userCity, updataSearchedJobs, setError, error, setLoading, loading }): JSX.Element => {
  const { color } = useContext(ThemeContext);
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleJobButton = (job: string) => {
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
    setLoading(true);
    if (!jobTitle) {
      setLoading(false);
      setError('Please select a job title.')
      errorTimeout(4000)
      return
    } else if (cityChecked === undefined) {
      setLoading(false);
      setError('City not on file. Please try a larger city in your area.')
      errorTimeout(4000)
      return
    } else {
      updataSearchedJobs(cityChecked, jobTitle);
    }
  }

  const errorTimeout = (time: number) => {
    window.setTimeout(function() {
      setError('')
    }, time);
  }

  return (
    <section>
      <p className='searchCommit' data-cy='searchCommit'>{`Search for ${jobTitle || 'your desired job'} in ${city || 'your city'}?`}</p>
      <article className='jobFilter' data-cy='jobFilter'>
        <button className='filtBut dataAnalyst' style={color.orange} data-cy='dataAnalyst' onClick={() => handleJobButton('Data Analyst')}>Data Analyst</button>
        <button className='filtBut dataScientist' style={color.orange} data-cy='dataScientist' onClick={() => handleJobButton('Data Scientist')}>Data Scientist</button>
        <button className='filtBut mobileDev' style={color.orange} data-cy='mobileDev' onClick={() => handleJobButton('Mobile Developer')}>Mobile Developer</button>
        <button className='filtBut qaEngineer' style={color.orange} data-cy='qaEngineer' onClick={() => handleJobButton('QA Engineer')}>QA Engineer</button>
        <button className='filtBut sysAdmin' style={color.orange} data-cy='sysAdmin' onClick={() => handleJobButton('Systems Administrator')}>Systems Admin</button>
        <button className='filtBut webDev' style={color.orange} data-cy='webDev' onClick={() => handleJobButton('Web Developer')}>Web Developer</button>
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
      <div className='errorMsg' data-cy="message"> {error && `${error}`} {loading && 'Loading...'}</div>
    </section>
  )
}

export default SearchForm
