import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './JobDetail.css';

function JobDetail( {title, company, location, description, url, deleteJob, id } ) {
  const { color } = useContext(ThemeContext)

  return (
    <article className='detailSec' data-cy='detailSec'>
      <h1 className='detTitle' data-cy='detTitle'>{title}</h1>
      <div>
        <p className='detComp' data-cy='detComp'>{company}</p>
        <p className='detLocal' data-cy='detLocal'>{location}</p>
        <p className='detDesc' data-cy='detDesc'>{description}</p>
        <div className='appDel'>
          <a href={url} className='detUrl' style={color.green} data-cy='detUrl'>Apply Here</a>
          <button className='deleteJobButton' style={color.pink} data-cy='deleteJobButton' id={id} onClick={e => deleteJob(id)}>Delete Job</button>
        </div>
      </div>
    </article>
  )
}

export default JobDetail;
