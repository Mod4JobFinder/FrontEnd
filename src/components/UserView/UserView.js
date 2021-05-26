import React, { useContext, useState, useEffect }from 'react';
import './UserView.css';
import Header from '../Header/Header.js';
import SaveCard from '../SaveCard/SaveCard.js';
import JobDetail from '../JobDetail/JobDetail.js';
import {ThemeContext} from '../../Context/ThemeContext';
import {UserContext} from '../../Context/UserContext';
import {deleteJobFromUser} from '../../apiCalls.js';

function UserView() {
  const {color} = useContext(ThemeContext);
  const {userSavedJobs, deleteJobUser} = useContext(UserContext);
  const [detailJob, setDetailJob] = useState({});
  const [savJobList, setSavJobList] = useState([]);

  useEffect(() => {
    setSavJobList(userSavedJobs);
  }, [userSavedJobs]);

  const updateDetailJob = (buttonId) => {
    const id = buttonId
    const toDetail = savJobList.find(job => job.id === id);
    setDetailJob(toDetail);
  }

  const deleteJob = (idToDelete) => {
    deleteJobUser(idToDelete)
    const jobToDelete = ({id: idToDelete})
    deleteJobFromUser(jobToDelete)
    .then(data => console.log(data))
  }

  const buildSaveCards = savJobList.map(job => {
    return (
      <SaveCard
        key={job.id}
        id={job.id}
        title={job.title}
        company={job.company}
        location={job.location}
        updateDetailJob={updateDetailJob}
      />
    )
  })

  return (
    <>
      <Header />
      <div className='userView' data-cy='userView' style={color.pageBackGround}>
        <section className='saveCardsLayout' data-cy='saveCardsLayout'>
          {buildSaveCards}
        </section>
        <section className='jobDetailLayout' data-cy='jobDetailLayout'>
          <JobDetail
            deleteJob={deleteJob}
            id={detailJob.id}
            title={detailJob.title}
            company={detailJob.company}
            location={detailJob.location}
            description={detailJob.description}
            url={detailJob.url}
          />
        </section>
      </div>
    </>
  )
}

export default UserView;
