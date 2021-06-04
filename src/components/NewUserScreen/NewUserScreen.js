import React from 'react';
import NewUserForm from '../NewUserForm/NewUserForm.js';
import Header from '../Header/Header.tsx';

function NewUserScreen() {
  return (
    <main>
      <Header hidden={'hidden'}/>
      <NewUserForm />
    </main>
  )
}

export default NewUserScreen
