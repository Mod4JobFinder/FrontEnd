import React from 'react';
import './JobCard.css';

function JobCard({ jobTitle, company, location, date, handleYesJob, id, updateList }) {
  return (
    <article className='jobCard' data-cy='jobCard'>
      <button onClick={e => handleYesJob(e)} id={id} className="yes">Yes</button>
      <h1 className='jobTitle'>{jobTitle}</h1>
      <p className='company'>{company}</p>
      <p className='location'>{location}</p>
      <p className='date'>Posted on: {date}</p>
      <button onClick={e => updateList(e)} id={id} className="no">No</button>
    </article>
  )
}

export default JobCard;
