import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './SearchForm.css';

function SearchForm() {
  const { color } = useContext(ThemeContext)
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle]= useState('');


  return (
    <section>
      <p>This is a search form</p>
    </section>
  )
}

export default SearchForm
