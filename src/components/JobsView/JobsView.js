import React, { useContext } from 'react';
import './JobsView.css';
import {ThemeContext} from '../ThemeContext';

function JobsView() {
  const { color } = useContext(ThemeContext)
  return (
    <p>Test 2</p>
  );
}

export default JobsView;
