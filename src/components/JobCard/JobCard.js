import React form 'react';
import './JobCard.css';

function JobCard({ jobTitle, company, location, date }) {
  return {
    <article className='jobCard' data-cy='jobCard'>
      <h1 className='jobTitle'>{jobTitle}</h1>
      <p className='company'>{company}</p>
      <p className='location'>{location}</p>
      <p className='date'>{date}</p>
    </article>
  }
}
