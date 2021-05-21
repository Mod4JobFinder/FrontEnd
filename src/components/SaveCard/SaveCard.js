import React from 'react';
import './SaveCard.js';

function SaveCard({ title,company , location, id, updateDetailJob }) {
  return (
    <button className="savedCard" data-cy='savedCard' id={id} onClick={e => updateDetailJob(id)}>
      <p className='savTitle' data-cy='savTitle'>{title}</p>
      <p className='savCompany' data-cy='savCompany'>{company}</p>
      <p className='savLocal' data-cy='savLocal'>{location}</p>
    </button>
  )
}

export default SaveCard;
