import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './JobDetail.css';

function JobDetail( {title, company, location, description, url, deleteJob, id } ) {
  const { color } = useContext(ThemeContext)

  const descSeg = description => {
    if (description) {
      const newDesc = description.split('<br>').map((segment, i) => {
      return <React.Fragment key={i.toString()}>{`${segment}`} <br /></React.Fragment>
      })
      return newDesc
    }
  }

  return (
    <article className='detailSec' data-cy='detailSec'>
      <h1 className='detTitle' data-cy='detTitle'>{title}</h1>
      <div>
        <p className='detComp' data-cy='detComp'>{company}</p>
        <p className='detLocal' data-cy='detLocal'>{location}</p>
        <p className='detDesc' data-cy='detDesc'>{descSeg(description)}</p>
        {!!description && <div className='appDel'>
          <a href={url} className='detUrl' style={color.green} target="_blank" data-cy='detUrl'>Apply Here</a>
          <button className='deleteJobButton' style={color.pink} data-cy='deleteJobButton' id={id} onClick={e => deleteJob(id)}>Delete Job</button>
        </div>}
        <div className='errorMsg' data-cy="message">{!description && 'Select a job from the cards to get started!'}</div>
      </div>
    </article>
  )
}

export default JobDetail;
