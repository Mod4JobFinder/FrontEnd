import React, { useContext, useState, useEffect } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext.js';
import {UserContext} from '../../Context/UserContext';
import Header from '../Header/Header.tsx';
import SearchForm from '../SearchForm/SearchForm.js';
import { getSalary, getJobs, postJobToUser } from '../../apiCalls.js';
import JobCard from '../JobCard/JobCard.js';

function JobsView() {
  const {color} = useContext(ThemeContext);
  const {currentUser ,saveJob} = useContext(UserContext);
  const [jobList, setJobsList] = useState([]);
  const [currentSalaries, setCurrentSalaries] = useState([]);
  const [currentCity, setCurrentCity] = useState('');
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentCity(currentUser.city)
  }, [currentUser]);

  useEffect(() => {
    getSalary(currentCity)
    .then(data =>  handleUpdateSalaries(data))
    .catch(err => console.log(err))
  }, [currentCity])

  const handleUpdateSalaries = (data) => {
    const salariesList = data.data.map(job => {
      return (
        <div className='salItem' key={job.id}>
          <h1 className='salTitle'>{job.attributes.title}</h1>
          <p className='range' data-cy='range'>{`${job.attributes.min_salary} to ${job.attributes.max_salary}`}</p>
        </div>
      )
    })
    setCurrentSalaries(salariesList);
  }

  const updataSearchedJobs = (searchCity, job) => {
    setCurrentCity(searchCity)
    getJobs(searchCity, job)
    .then(data => {
      setLoading(false);
      setJobsList(data.data);
    })
    .catch(err => console.log(err))
  }

  const handleYesJob = (e) => {
    const id = e.target.id
    const toSave = jobList.find(job => job.id === id);
    updateList(e)
    postJobToUser({email: currentUser.email, title: toSave.attributes.title, company: toSave.attributes.company, location: toSave.attributes.location, url: toSave.attributes.url, description: toSave.attributes.description})
    .then(data => saveJob(data.data.attributes))
    .catch(err => console.log(err))
  }

  const updateList = (e) => {
    const id = e.target.id
    const list = jobList.filter(job => job.id !== id)
    setJobsList(list);
  }

  const buildJobsDisplay = jobList.map(job => {
    return (
      <JobCard
        updateList={updateList}
        handleYesJob={handleYesJob}
        jobTitle={job.attributes.title}
        company={job.attributes.company}
        location={job.attributes.location}
        date={job.attributes.date}
        key={job.id}
        id={job.id}
      />
    )
  })

  return (
    <>
      <Header hidden={''}/>
      <main className='jobViewLayout' data-cy='jobViewLayout' style={color.pageBackGround}>
        {currentCity && <section className='formSec' data-cy='formSec'>
          <h1 className='citySal' data-cy='citySal'>{`Current search is for ${currentCity}.`}</h1>
          <div className="formStyle">
            <article className='allSal' data-cy='salHeader' style={color.blueborder}>
              {currentSalaries}
            </article>
          </div>
          <SearchForm userCity={currentCity} updataSearchedJobs={updataSearchedJobs} setError={setError} error={error} setLoading={setLoading} loading={loading}/>
        </section>}
        {jobList && <section className='currentJobDisplaySection'>
          {buildJobsDisplay}
        </section>}
      </main>
    </>
  );
}

export default JobsView;
