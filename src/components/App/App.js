import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import JobsView from '../JobsView/JobsView';
import UserView from '../UserView/UserView';
import NewUserScreen from '../NewUserScreen/NewUserScreen';
import {ThemeContextProvider} from '../../Context/ThemeContext.js';
import {UserContextProvider} from '../../Context/UserContext';

function App() {

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Switch className='app'>
          <Route exact path='/JobsView' component={ JobsView }/>
          <Route exact path='/UserView' component={ UserView }/>
          <Route exact path='/NewUser' component={ NewUserScreen }/>
          <Route path='/' component={ Landing }/>
        </Switch>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
