import React, { useEffect, useState, useRef } from "react";

const LandingSlides = () => {
  const [show, setShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  });

  const firstRef = useRef(null),
    secondRef = useRef(null),
    thirdRef = useRef(null);
  useEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const 
      div2Pos = topPos(secondRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <table className=" col-start-2 col-span-8 mt-20 absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5">
      <tr>
        
        <td
          className={`${
            show.itemTwo && `animate-fade-in-left-two`
          } mt-20 col-start-5 col-span-2`}
          ref={secondRef}
        >
          <div className="bg-transparent mx-5 hover:underline  rounded-lg shadow-2xl cursor-pointer">
            <div className="px-4 pt-2">
              <h1 className="font-bold mt-2 text-4xl ">
               A Cool Guy 
              </h1>
              <h3 className="dark:text-gray-300"></h3>
            </div>
          </div>
        </td>
        
      </tr>
    </table>
  );
};

export default LandingSlides;
