import React, { useState, useEffect } from 'react';

function Header() {

  const [mode, setMode] = useState('light');

  const handleModeChange = (e) => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  return (
    <section className='headerLayout' data-cy='headerLayout'>
      <button onClick={e => handleModeChange(e)} className='mode' data-cy='mode'>mode</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy='appTitle'>Job Finder!<h1>
      </article>
    </section>
  )
}

export default Header;
