import React, { useContext } from 'react';
import NewUserForm from '../NewUserForm/NewUserForm.js';
import './NewUserScreen.css';
import Header from '../Header/Header.js';

function NewUserScreen() {
  return (
    <main>
      <Header hidden={'hidden'}/>
      <NewUserForm />
    </main>
  )
}

export default NewUserScreen
