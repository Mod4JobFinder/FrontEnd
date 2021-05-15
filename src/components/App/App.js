import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing.js';
import JobsView from '../JobsView/JobsView.js';
import UserView from '../UserView/UserView.js';
import ThemeContext from '../ThemeContext';

function App() {
  const [color, setColor] = useState('dark');
  
  return (

    <ThemeContext.Provider value={{color, setColor}}>
      <Switch className='app'>
        <Route exact path='/' component={ Landing }/>
        <Route exact path='/JobsView' component={ JobsView }/>
        <Route exact path='/UserView' component={ UserView }/>
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
