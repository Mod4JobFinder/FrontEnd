import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing.js';
import JobsView from '../JobsView/JobsView.js';
import UserView from '../UserView/UserView.js';

function App() {

  return (
    <Switch className='app'>
      <Route exact path='/' component={ Landing }/>
      <Route exact path='/JobsView' component={ JobsView }/>
      <Route exact path='/UserView' component={ UserView }/>
    </Switch>
  );
}

export default App;
