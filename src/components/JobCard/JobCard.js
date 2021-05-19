import React from 'react';
import './JobCard.css';

function JobCard({ jobTitle, company, location, date, handleYesJob, id }) {
  return (
    <article className='jobCard' data-cy='jobCard'>
      <button onClick={e => handleYesJob(e)} id={id}>Yes</button>
      <h1 className='jobTitle'>{jobTitle}</h1>
      <p className='company'>{company}</p>
      <p className='location'>{location}</p>
      <p className='date'>{date}</p>
      <button>No</button>
    </article>
  )
}

export default JobCard;
