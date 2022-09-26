import React, { useState, useEffect } from "react";
import {  ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length/5);

  useEffect(() => {
    setLength(children.length/5);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className=" col-start-2 col-span-8 flex flex-row">
      <div className=" w-full relative ">
        {currentIndex > 0 && (
          <button
            onClick={prev}
            w={8}
            h={8}
            className=" absolute z-10 cursor-pointer bg-white"
          />
        )}
        <div className=" overflow-hidden w-full">
          {currentIndex < length - 1 && (
            <ChevronRightIcon
              onClick={next}
              className=" absolute z-10 cursor-pointer bg-white"
            />
          )}
          <div
            className="flex ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 110}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;