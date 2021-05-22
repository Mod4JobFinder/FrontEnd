import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

    const lightMode = {
      blue: {
        backgroundColor: 'darkblue',
        color: 'white',
      },
      pink: {
        backgroundColor: 'violet',
        color: 'white',
      },
      green: {
        backgroundColor: 'mediumseagreen',
        color: 'black',
      },
      orange: {
        backgroundColor: 'darkorange',
        color: 'black',
      },
      pageBackGround: {
        backgroundColor: 'white',
        color: 'black',
      }
    }

    const darkMode = {
      blue: {
        backgroundColor: 'powderblue',
        color: 'black',
      },
      pink: {
        backgroundColor: 'plum',
        color: 'black',
      },
      green: {
        backgroundColor: 'springgreen',
        color: 'black',
      },
      orange: {
        backgroundColor: 'orange',
        color: 'black',
      },
      pageBackGround: {
        backgroundColor: 'black',
        color: 'white',
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
