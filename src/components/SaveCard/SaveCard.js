import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext.js';
import './SaveCard.css';

function SaveCard({ title,company , location, id, updateDetailJob }) {
  const { color } = useContext(ThemeContext)

  return (
    <button className="savedCard" data-cy='savedCard' id={id} style={color.orangeborder} onClick={e => updateDetailJob(id)}>
      <div className="bd">
      <p className='savTitle' data-cy='savTitle'>{title}</p>
      <p className='savCompany' data-cy='savCompany'>{company}</p>
      <p className='savLocal' data-cy='savLocal'>{location}</p>
      </div>
    </button>
  )
}

export default SaveCard;
