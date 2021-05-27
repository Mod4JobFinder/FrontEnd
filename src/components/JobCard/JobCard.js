import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './JobCard.css';

function JobCard({ jobTitle, company, location, date, handleYesJob, id, updateList }) {
  const { color } = useContext(ThemeContext)
  return (
    <article className='jobCard' style={color.blueborder} data-cy='jobCard'>
      <button onClick={e => handleYesJob(e)} id={id} className="yes" style={color.green}>Save</button>
      <h1 className='jobTitle'>{jobTitle}</h1>
      <p className='company' style={color.blueborder}>{company}</p>
      <p className='location'>{location}</p>
      <p className='date'>Posted on: {date}</p>
      <button onClick={e => updateList(e)} id={id} className="no" style={color.pink}>Delete</button>
    </article>
  )
}

export default JobCard;
