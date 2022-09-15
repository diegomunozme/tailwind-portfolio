import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";
const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme ==="light" ? true : false)
  
  
  const toggleDarkMode = (checked)=>{
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
        <div className="flex flex-col items-center">
           <DarkModeSwitch 
           checked={darkSide}
           size={30} 
           onChange={toggleDarkMode}/>
        </div>
      
    </div>
  );
};

export default Switcher;
