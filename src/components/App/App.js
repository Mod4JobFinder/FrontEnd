import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing.js';
import JobsView from '../JobsView/JobsView.js';
import UserView from '../UserView/UserView.js';
import {ThemeContextProvider} from '../../Context/ThemeContext';
import NewUserScreen from '../NewUserScreen/NewUserScreen.js';

function App() {

  return (
    <ThemeContextProvider>
      <Switch className='app'>
        <Route exact path='/' component={ Landing }/>
        <Route exact path='/NewUser' component={ NewUserScreen }/>
        <Route exact path='/JobsView' component={ JobsView }/>
        <Route exact path='/UserView' component={ UserView }/>
      </Switch>
    </ThemeContextProvider>
  );
}

export default App;
