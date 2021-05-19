import React, { useContext, useState, useEffect } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext';
import {UserContext} from '../../Context/UserContext';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { getSalary } from '../../apiCalls.js';

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
        <p className='range' data-cy='range'>{`From ${job.attributes.min_salary} to ${job.attributes.min_salary}`}</p>
      </div>
    )
  })

  return (
    <>
      <Header />
      <main className='jobViewLayout' data-cy='jobViewLayout'>
        {currentCity && <section className='formSec' data-cy='formSec'>
          <article className='salList' data-cy='salList'>
              <h1 className='citySal' data-cy='citySal'>{`Current search is for ${currentCity}.`}</h1>
              {buildSalDisplay}
          </article>
          <SearchForm />
        </section>}
      </main>
    </>
  );
}

export default JobsView;
