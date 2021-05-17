import React, { useContext } from 'react';
import {ThemeContext} from '../../Context/ThemeContext';
import NewUserForm from '../NewUserForm/NewUserForm.js';
import './NewUserScreen.css';
import Header from '../Header/Header.js';

function NewUserScreen() {
  const {color} = useContext(ThemeContext);
  return (
    <main>
      <Header />
      <NewUserForm />
    </main>
  )
}

export default NewUserScreen
