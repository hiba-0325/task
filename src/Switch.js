import React, { createContext,useState } from "react";
import "./TaskApp.css";
import TaskApp from "./Tasktheme";




function Switch() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    

    <div className={isDarkTheme ? "dark" : "light"}>

      <div className="box-container">
       
        
        <button className="switch-btn" onClick={toggleTheme}>
          {isDarkTheme ? "Light" : "Dark"}
        </button>
        <TaskApp/>
      </div>
      
    </div>
  );
}

export default Switch;
