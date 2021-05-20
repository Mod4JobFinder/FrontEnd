import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userSavedJobs, setUserSavedJobs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGoodLogin = (user) => {
    setCurrentUser(user)
    setLoggedIn(true);
    if (user.saved_jobs.length) {
      setUserSavedJobs(user.saved_jobs)
    }
  }

  const saveJob = (job) => {
    if (!userSavedJobs.length) {
      setUserSavedJobs([job])
    } else {
      const storedJobs = userSavedJobs
      setUserSavedJobs([...storedJobs, job])
    }
  }

  return (
    <UserContext.Provider value={{currentUser,userSavedJobs,loggedIn,handleGoodLogin, saveJob, setUserSavedJobs}}>
      {props.children}
    </UserContext.Provider>
  )
}
