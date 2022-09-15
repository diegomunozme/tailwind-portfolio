import React from "react";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#ffffff40] dark:bg-transparent flex justify-center items-center z-2 text-center justify-betwee py-2 px-20 place-content-center">
      <div className="flex flex-row px- w-1/2 place-content-center">
        <div className="flex-auto font-mono text-xl font-bold hover:underline w-1 dark:text-gray-300">
          <Link to="/">
            <h1>
              Diego Munoz
            </h1>
          </Link>
        </div>
        <div className="flex-auto hover:underline w-1 dark:text-gray-300"> 
          <Link to="/Experience">
            <div>
              Experience
            </div>
          </Link>
        </div>
        <div className="flex-auto hover:underline w-1 dark:text-gray-300">
          Cool Things
        </div>
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
