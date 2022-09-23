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
    const div1Pos = topPos(firstRef.current),
      div2Pos = topPos(secondRef.current),
      div3Pos = topPos(thirdRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos + 200 < scrollPos) {
        // console.log("true");
        setShow((state) => ({ ...state, itemOne: true }));
        setShow((state) => ({ ...state, itemTwo: true }));
        setShow((state) => ({ ...state, itemThree: true }));
      } else if (div2Pos < scrollPos) {
        console.log(div2Pos);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <table className=" col-start-2 col-span-8 mt-20 absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5">
      <tr>
        <td className="mt-20 col-start-2 col-span-2 align-middle">
          <div
            className={`${show.itemOne && `animate-fade-in-left`} mx-5`}
            ref={firstRef}
          >
            <div className=" bg-transparent cursor-pointer rounded-lg shadow-2xl hover:underline">
              <div className="px-4 pt-2">
                <h1 className="font-bold mt-2 text-4xl ">
                  Data Analysis Engineer
                </h1>
                <h3 className="dark:text-gray-300"></h3>
              </div>
            </div>
          </div>
        </td>
        <td
          className={`${
            show.itemTwo && `animate-fade-in-left-two`
          } mt-20 col-start-5 col-span-2`}
          ref={secondRef}
        >
          <div className="bg-transparent mx-5 hover:underline  rounded-lg shadow-2xl cursor-pointer">
            <div className="px-4 pt-2">
              <h1 className="font-bold mt-2 text-4xl ">
                Freelance FullStack Developer
              </h1>
              <h3 className="dark:text-gray-300"></h3>
            </div>
          </div>
        </td>
        <td
          className={`${
            show.itemThree && `animate-fade-in-left-three`
          } mt-20 mx-5 col-start-8 col-span-2`}
          ref={thirdRef}
        >
          <div className="bg-transparent mx-5 hover:underline  cursor-pointer rounded-lg shadow-2xl">
            <div className="px-4 pt-2">
              <h1 className="font-bold mt-2 text-4xl  ">
                Exhibition Kickboxer
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
