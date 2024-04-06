import React from "react";
import Card from "../../Components/UI/Card";
import ExperienceCard from "./ExperienceCard";
import { SoftwareProjects, DataAnalysis } from "../../Assets/data";
const Experience = () => {
  return (
    <div className="grid grid-cols-10 col-start-2 ">
      <div className=" col-start-2 col-span-8">
        <h1 className=" pt-5 text-3xl dark:text-gray-300">
          Software Development
        </h1>
        <div className="flex items-center justify-center ">
          {SoftwareProjects.map((item) => (
            <ExperienceCard

              title={item.title}
              time={item.timeline}
            />
          ))}
        </div>
      </div>
      <div className=" col-start-2 col-span-8">
        <h1 className=" pt-5 text-3xl dark:text-gray-300">
          Analysis
        </h1>
        <div className="flex pt-10">
          {DataAnalysis.map((item) => (
            <ExperienceCard
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
