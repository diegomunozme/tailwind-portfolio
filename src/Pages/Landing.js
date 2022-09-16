import React from "react";
import Hobbiton from "../Assets/Hobbiton.gif";
import BJJ from "../Assets/Bjj.jpg";

const Landing = () => {
  return (
    <div className="grid grid-cols-10 place-items-center  dark:text-gray-300">
      <img className=" col-start-4 col-span-4 h-34 rounded-xl mt-9" src={Hobbiton} />
      <div className="flex w-full col-start-4 col-span-4 p-3 mt-5 rounded-lg bg-[#ffffff40]">
        <div className="flex justify-start">
          Greetings!!
          <h1>Name's Diego, currently I'm a:</h1>
          <ul className="flex justify-start  list-disc mx-2">
            <li className="mt-5">
              Data Analysis Engineer 2 at General Atomics
            </li>
            <li> Freelance Developer in my freetime</li>
            <li> Exhibition Kickboxer in my freetime freetime </li>
          </ul>
        </div>
        <img className="flex justify-end h-24 border border-gray-300 rounded-lg" src={BJJ} />
      </div>
      <div className=" col-start-4 col-span-4">
        <div className="mt-5">
          <h1 className=" text-3xl bold">Work</h1>
        </div>
        <div className="mt-5">
          <p>
            From improving the manufacturing process of UAVs in uber-competitive
            billion dollar industries, raising $50,000 for quantitative trading,
            and political startups, developing my own SAAS, and even training
            with World Champion Muay Thai Fighters. I make sure that the Diego
          </p>
        </div>  
      </div>
    </div>
  );
};

export default Landing;
