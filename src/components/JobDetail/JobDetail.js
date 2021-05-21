import React from 'react';
import './JobDetail.css';

function JobDetail( {title, company, location, description, url} ) {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        <p>{company}</p>
        <p>{location}</p>
        <p>{description}</p>
        <a href={url}>Apply Here</a>
        <button>Nevermind Get rid of this one</button>
      </div>
    </section>
  )
}

export default JobDetail;
