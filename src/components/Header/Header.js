import React from 'react';

function Header() {
  return (
    <section className='headerLayout' data-cy='headerLayout'>
      <button className='mode' data-cy='mode'>mode</button>
      <article className='titleBox' data-cy='titleBox'>
        <h1 className='appTitle' data-cy'appTitle'>Job Finder!<h1>
      </article>
    </section>
  )
}
