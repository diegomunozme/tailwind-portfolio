import React from "react";

const Header = () => {
  return (
    <div className="bg-transparent z-2 text-center justify-betwee flex flex-wrap px-20 place-content-center">
      <div className="flex flex-row px- w-1/2 place-content-center">
        <h1 className="flex-auto font-mono text-xl font-bold hover:underline w-1">Diego Munoz</h1>
        <div className="flex-auto hover:underline w-1">Experience</div>
        <div className="flex-auto hover:underline w-1">Cool Things</div>
      </div>
    </div>
  );
};

export default Header;
