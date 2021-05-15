import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [color, setColor] = useState('light');
  const handleModeChange = (e) => {
    if (color === 'light') {
      setColor('dark');
    } else {
      setColor('light');
    }
  }
  return(
    <ThemeContext.Provider value={{color, handleModeChange}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
