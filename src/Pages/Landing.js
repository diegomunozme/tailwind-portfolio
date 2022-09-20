import React from "react";
import Hobbiton from "../Assets/mario.jpg";
import BJJ from "../Assets/Bjj.jpg";
import CoolThings from "./CoolThings";
import Timeline from "../Components/Timeline";

const Landing = () => {
  return (
    <div className=" grid grid-cols-10 gap-4 h-fi dark:text-gray-300">
      <div className=" col-start-3 col-span-6 ">
        <img src={Hobbiton} className="rounded-xl mt-9" />
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Diego Munoz
        </h1>
        <CoolThings />
      </div>
      {/* <CoolThings /> */}
      <div className=" flex col-start-2 col-span-8 mt-36">
        <div>
          <div className="mt-5">
            <h1 className=" text-3xl bold">About Me</h1>
          </div>
          <div className="mt-5 text-lg">
            <p>
              Through the wide variety of experiences I have such as: improving
              the manufacturing process of UAVs in uber-competitive billion
              dollar industries, raising $50,000 for quantitative trading, and
              political startups, developing my own SAAS I am confident I have
              the skillset your team needs.
            </p>
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Landing;
