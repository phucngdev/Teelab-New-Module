import React, { useState } from "react";
import loadData from "../../../api/CallApi";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  loadData("feedback", setFeedback);
  const printFb = feedback.map((item, index) => (
    <div key={index}>
      <img className="w-full object-cover" src={item.img} alt="" />
    </div>
  ));
  return (
    <div className="feedback mb-[70px]">
      <div className="container mx-auto">
        <h1 className="text-[40px] text-[#333] mb-[30px] pt-10 text-center border-t-[1px] border-solid border-gray-400">
          Find out TEELAB more
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-2">{printFb}</div>
      </div>
    </div>
  );
};

export default Feedback;
