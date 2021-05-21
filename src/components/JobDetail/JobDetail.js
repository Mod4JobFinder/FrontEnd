import React from 'react';
import './JobDetail.css';

function JobDetail( {title, company, location, description, url} ) {
  return (
    <article className='detailSec' data-cy='detailSec'>
      <h1 className='detTitle' data-cy='detTitle'>{title}</h1>
      <div>
        <p className='detComp' data-cy='detComp'>{company}</p>
        <p className='detLocal' data-cy='detLocal'>{location}</p>
        <p className='detDesc' data-cy='detDesc'>{description}</p>
        <a href={url} className='detUrl' data-cy='detUrl'>Apply Here</a>
        <button className='deleteJobButton' data-cy='deleteJobButton'>Nevermind Get rid of this one</button>
      </div>
    </article>
  )
}

export default JobDetail;
