import React from 'react';
import './UserView.css';
import Header from '../Header/Header.js';
import SaveCard from '../SaveCard/SaveCard.js';
import JobDetail from '../JobDetail/JobDetail.js';

function UserView() {
  return (
    <>
      <Header />
      <SaveCard />
      <JobDetail />
    </>
  );
}

export default UserView;
