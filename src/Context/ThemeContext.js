import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    const lightMode = {
      blue: {
        backgroundColor: '#3B27BA',
        color: '#FFFFFF',
      },
      pink: {
        backgroundColor: '#E847AE',
        color: '#FFFFFF',
      },
      green: {
        backgroundColor: '#13CA91',
        color: '#000000',
      },
      orange: {
        backgroundColor: '#FF9472',
        color: '#000000',
      },
      pageBackGround: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
      }
    }

    const darkMode = {
      blue: {
        backgroundColor: '#B9FFFD',
        color: '#000000',
      },
      pink: {
        backgroundColor: '#FFB3FD',
        color: '#000000',
      },
      green: {
        backgroundColor: '#01FFC3',
        color: '#000000',
      },
      orange: {
        backgroundColor: '#FFBE7B',
        color: '#000000',
      },
      pageBackGround: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }
    }

  const [mode, setMode] = useState('dark')
  const [color, setColor] = useState(darkMode);

  const handleModeChange = (e) => {
    if (mode === 'light') {
      setMode('dark')
      setColor(darkMode);
    } else {
      setMode('light')
      setColor(lightMode);
    }
  }

  return(
    <ThemeContext.Provider value={{color, handleModeChange}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
