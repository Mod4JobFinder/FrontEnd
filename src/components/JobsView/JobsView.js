import React, { useContext, useState, useEffect } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext';
import {UserContext} from '../../Context/UserContext';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { getSalary, getJobs } from '../../apiCalls.js';

function JobsView() {
  const {color} = useContext(ThemeContext);
  const {currentUser ,setUserSavedJobs} = useContext(UserContext);
  const [jobList, setJobsList] = useState([]);
  const [currentSalaries, setCurrentSalaries] = useState([]);
  const [currentCity, setCurrentCity] = useState('');

  useEffect(() => {
    getSalary(currentUser.city)
    .then(data =>  handleUpdateSalaries(data))
  }, [currentUser]);

  const handleUpdateSalaries = (data) => {
    const city = data.data[0].attributes.city
    const salaries = data.data
    setCurrentSalaries(salaries);
    setCurrentCity(city)
  }

  const buildSalDisplay = currentSalaries.map(job => {
    return (
      <div className='salItem' key={job.id}>
        <h1 className='salTitle'>{job.attributes.title}</h1>
        <p className='range' data-cy='range'>{`${job.attributes.min_salary} to ${job.attributes.max_salary}`}</p>
      </div>
    )
  })

  const updataSearchedJobs = (searchCity, job) => {
    getJobs(searchCity, job)
    .then(data => console.log(data));
  }

  return (
    <>
      <Header />
      <main className='jobViewLayout' data-cy='jobViewLayout'>
        {currentCity && <section className='formSec' data-cy='formSec'>
          <h1 className='citySal' data-cy='citySal'>{`Current search is for ${currentCity}.`}</h1>
          <div className="formStlye">
            <article className='salList' data-cy='salHeader'>
              <article>
            </article>
              {buildSalDisplay}
            </article>
          </div>
          <SearchForm userCity={currentCity} updataSearchedJobs={updataSearchedJobs}/>
        </section>}
      </main>
    </>
  );
}

export default JobsView;
