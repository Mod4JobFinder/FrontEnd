import React, { useContext } from 'react';
import './JobsView.css';
import {ThemeContext} from '../../Context/ThemeContext';

function JobsView() {
  const { color } = useContext(ThemeContext)
  return (
    <p>Test 2</p>
  );
}

export default JobsView;
