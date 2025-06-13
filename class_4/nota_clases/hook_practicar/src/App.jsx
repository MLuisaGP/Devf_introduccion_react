import React from 'react'
import './App.css'
import EjemploContext from './components/EjemploContext'
import ThemeContext from './context/ThemeContext';


function App() {
  return (
    <ThemeContext.Provider value="darks">
      <EjemploContext />
    </ThemeContext.Provider>
  );
}


export default App
