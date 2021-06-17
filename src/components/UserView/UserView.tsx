import { useContext, useState, useEffect } from 'react';
import './UserView.css';
import Header from '../Header/Header';
import SaveCard from '../SaveCard/SaveCard';
import JobDetail from '../JobDetail/JobDetail';
import {ThemeContext} from '../../Context/ThemeContext.js';
import {UserContext} from '../../Context/UserContext';
import {deleteJobFromUser} from '../../apiCalls';
import {UpdateListJob, SaveCards, Details} from '../../interface';

function UserView() {
  const {color} = useContext(ThemeContext);
  const { userSavedJobs, deleteJobUser} = useContext(UserContext);
  const [detailJob, setDetailJob] = useState({});
  const [savJobList, setSavJobList] = useState([]);

  useEffect(() => {
    setSavJobList(userSavedJobs);
  }, [userSavedJobs]);

  const updateDetailJob = (buttonId: string) => {
    const id = buttonId
    const toDetail = savJobList.find((job: UpdateListJob) => job.id === id);
    setDetailJob(toDetail);
  }

  const deleteJob = (idToDelete: string) => {
    deleteJobUser(idToDelete)
    const jobToDelete = ({id: idToDelete})
    deleteJobFromUser(jobToDelete)
    .then(data => console.log(data))
  }

  const buildSaveCards = savJobList.map((job: SaveCards) => {
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

  const buildJobDetail = (detailJob: Details) => {
    return (
      <JobDetail
        deleteJob={deleteJob}
        id={detailJob.id}
        title={detailJob.title}
        company={detailJob.company}
        location={detailJob.location}
        description={detailJob.description}
        url={detailJob.url}
      />
    )
  }

  return (
    <>
      <Header hidden={''}/>
      <div className='userView' data-cy='userView' style={color.pageBackGround}>
        <section className='saveCardsLayout' data-cy='saveCardsLayout'>
          {buildSaveCards}
        </section>
        <section className='jobDetailLayout' data-cy='jobDetailLayout'>
          {detailJob && buildJobDetail(detailJob)}
        </section>
      </div>
    </>
  )
}

export default UserView;
