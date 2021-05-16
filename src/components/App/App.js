import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing.js';
import JobsView from '../JobsView/JobsView.js';
import UserView from '../UserView/UserView.js';
import NewUserScreen from '../NewUserScreen/NewUserScreen.js';
import {ThemeContextProvider} from '../../Context/ThemeContext';
import {UserContextProvider} from '../../Context/UserContext';

function App() {

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Switch className='app'>
          <Route exact path='/' component={ Landing }/>
          <Route exact path='/NewUser' component={ NewUserScreen }/>
          <Route exact path='/JobsView' component={ JobsView }/>
          <Route exact path='/UserView' component={ UserView }/>
        </Switch>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
