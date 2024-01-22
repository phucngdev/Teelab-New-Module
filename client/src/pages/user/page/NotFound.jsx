import React from "react";
import notfound from "../../../../public/notfound.png";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[30%]" src={notfound} alt="" />
      </div>
    </>
  );
};

export default NotFound;
