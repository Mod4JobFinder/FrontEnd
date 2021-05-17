import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userSavedJobs, setUserSavedJobs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGoodLogin = (user) => {
    setCurrentUser(user)
    setLoggedIn(true);
  }

  return (
    <UserContext.Provider value={{currentUser,userSavedJobs,loggedIn,handleGoodLogin}}>
      {props.children}
    </UserContext.Provider>
  )
}
