import React, { useContext }from 'react';
import './UserView.css';
import Header from '../Header/Header.js';
import SaveCard from '../SaveCard/SaveCard.js';
import JobDetail from '../JobDetail/JobDetail.js';
import {ThemeContext} from '../../Context/ThemeContext';
import {UserContext} from '../../Context/UserContext';

function UserView() {
  const {currentUser ,saveJob, setUserSavedJobs} = useContext(UserContext);

  return (
    <>
      <Header />
      <SaveCard />
      <JobDetail />
    </>
  );
}

export default UserView;
