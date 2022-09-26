import React from "react";
import Card from "../../Components/UI/Card";
import ExperienceCard from "./ExperienceCard";
import { SoftwareProjects, DataAnalysis } from "../../Assets/data";
import Accordion from "./Accordion";
import Carousel from "../../Components/UI/Carousel";
const Experience = () => {
  return (
    <div className="grid grid-cols-10 col-start-2 min-h-screen">
      <div className=" col-start-2 col-span-8">
        <h1 className=" pt-5 text-3xl dark:text-gray-300">
          Software Development
        </h1>
        <div className="flex pt-10">
          {SoftwareProjects.map((item) => (
            <ExperienceCard
              title={item.title}
              time={item.timeline}
              responsabilities={item.responsabilities}
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
              responsabilities={item.responsabilities}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
