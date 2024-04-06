import React from "react";
import Hobbiton from "../../Assets/Hobbiton.gif";

import LandingSlides from "./LandingSlides";
import Timeline from "../../Components/Timeline";

const Landing = () => {
  return (
    <div >
      <div>
        <div
          className="flex flex-col items-center justify-center h-screen text-white"

        >
          <img src={Hobbiton} alt="Description of the GIF" className="w-80 h-80 rounded-lg" />
          <br />
          <br />
          <h1 className="font-bold text-4xl mt-8">
            Diego Munoz
          </h1>
          <h2 className="font-bold  text-2xl mt-8">
            Full Time Software Engineer @ General Atomics
          </h2>
          <h2 className="font-bold  text-2xl mt-8">
            Current Student MS.CS @ CU Boulder
          </h2>
          <h3 className="text-2xl">
            All Around, Cool Guy&trade;
          </h3>
        </div>
        <div className=" ">
          <div>
            <div className="">
              <h1 className=" text-3xl bold">About Me</h1>
            </div>
            <div className="text-lg">
              <p>
                I've worn many hats, designig dotnet architecture for engineering management tools, improving
                the manufacturing process of UAVs in, raising $50,000 for quantitative trading + and
                political startups (sadly neither made it past seed but still a fun experience), and starting my own LLC to 
                'sell shovels during a gold rush', I am confident I have
                the skillset, workethic and drive to fit your teams needs.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Landing;
