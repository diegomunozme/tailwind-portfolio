import React, { useState } from "react";

const Card = (props) => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  return (
    <div className="w-full md:w-1/2 lg:w-2/6 items-center flex place-content-center self-center">
      <div className="bg-white dark:bg-gray-800 m-4 rounded-lg shadow-2xl">
        <img
          src={props.image
            // "https://picsum.photos/id/1020/800/260" +
            // (colorTheme === "light" ? "?grayscale" : "")
          }
          alt="Post"
          className="rounded-t-lg"
        />
        <div className="px-4 pt-2">
          <h1 className="font-bold mt-2 text-2xl dark:text-gray-300">{props.title}</h1>
          <h3 className="dark:text-gray-300">{props.subTitle}</h3>
          <p className="dark:text-gray-300">{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
