import React from "react";
import { DataAnalysis } from "../../Assets/data";


const Slider = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button>Previous</button>

          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
