import React, { useEffect, useState, useRef } from "react";

const CoolThings = () => {
  const [show, setShow] = useState({
    itemOne: false
  });

  const ourRef = useRef(null);

  useEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        // console.log("true");
        // console.log(div1Pos);
        setShow((state) => ({ ...state, itemOne: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <p>scroll down</p>
      <div className="flex mt-[100vh]">
        <div
          className={`${
            show.itemOne && `animate-fade-in-left`
          } h-[900px] w-80 bg-red-500`}
          ref={ourRef}

          // onAnimationEnd={() => setShow(false)}
        >
          <p>tag here</p>
          <p>tag here</p>
          <p>tag here</p>
          <p>tag here</p>
        </div>
      </div>
    </div>
  );
};

export default CoolThings;
