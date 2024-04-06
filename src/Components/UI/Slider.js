import React from "react";
import { DataAnalysis } from "../../Assets/data";
import useState from 'react'

const Slider = () => {
  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Event handlers for Previous and Next buttons
  const goToPrevious = () => {
    // Check if the first item is reached. If so, wrap around to the last item.
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? DataAnalysis.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    // Check if the last item is reached. If so, wrap around to the first item.
    const isLastItem = currentIndex === DataAnalysis.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Get the current item to display
  const currentItem = DataAnalysis[currentIndex];

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        {/* Slider Controls */}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={goToPrevious}>Previous</button>
          <button onClick={goToNext}>Next</button>
        </div>
        {/* Display current item */}
        <div className="w-full">
          {/* Render the current item. You might need to adjust this based on your data structure. */}
          <div>{currentItem.content}</div>
        </div>
      </div>
    </div>
  );
};



export default Slider;
