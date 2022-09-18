import React, { useState } from "react";

const TextCard = (props) => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 m-4 rounded-lg shadow-2xl">
        <div className="px-4 pt-2">
          <h1 className="font-bold mt-2 text-2xl dark:text-gray-300">
            {props.title}
          </h1>
          <h3 className="dark:text-gray-300">{props.subTitle}</h3>
          <p className="dark:text-gray-300">{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
