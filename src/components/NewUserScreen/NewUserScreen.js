import React from 'react';
import NewUserForm from '../NewUserForm/NewUserForm';
import Header from '../Header/Header';

function NewUserScreen() {
  return (
    <main>
      <Header hidden={'hidden'}/>
      <NewUserForm />
    </main>
  )
}

export default NewUserScreen
