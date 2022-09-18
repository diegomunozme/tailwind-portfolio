import React, { useEffect, useState, useRef } from "react";
import { stuffAboutMe } from "../Assets/data";
import TextCard from "../Components/UI/Card";

const CoolThings = () => {
  const [show, setShow] = useState({
    itemOne: false,
    itemTwo: false,
  });

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(firstRef.current);
    const div2Pos = topPos(secondRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        // console.log("true");
        // console.log(div1Pos);
        setShow((state) => ({ ...state, itemOne: true }));
        setShow((state) => ({ ...state, itemTwo: true }));
      } else if (div2Pos < scrollPos) {
        console.log(div2Pos);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="flex">
        <div
          className={`${show.itemOne && `animate-fade-in-left`}`}
          ref={firstRef}
        >
          <TextCard
            title="Data Analysis Engineer"
            subTitle="2 Years experience Oracle SQL, Python, Machine Learning"
          />
        </div>
        <div
          className={`${
            show.itemTwo && `animate-fade-in-left-two`
          } h-[900px] w-80 bg-blue-500`}
          ref={secondRef}
        >
          <h1>Fullstack&Blockchain Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default CoolThings;
