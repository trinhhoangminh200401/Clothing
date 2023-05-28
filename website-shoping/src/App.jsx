import React from 'react'
import LinksClient from './routes'
import { createContext, useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  const ThemeContext=createContext(null)
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={theme}>
    <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </div>
        <LinksClient />
    </ThemeContext.Provider>
    
  )
}

export default App