import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkMode = {backgroundColor: "black", color: "white"};
  const lightMode = {backgroundColor: "white", color: "black"};

  return (
    <div id="main" style={isDarkMode ? darkMode : lightMode}>
      <h1 style={isDarkMode ? {color: "white"} : {color:"black"}}>
        {isDarkMode ? "Dark Mode Activated" : "Light Mode Activated"}
      </h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  )
}


export default App;